const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

function walk(dir) {
  let res = [];
  if (!fs.existsSync(dir)) return res;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
    else if (f === 'page.tsx') res.push(p);
  }
  return res;
}

function getRoutes() {
  const pages = walk(path.join(process.cwd(), 'app'));
  const routes = pages.map(p => {
    const rel = path.relative(path.join(process.cwd(), 'app'), p).replace(/\\/g, '/');
    // strip any trailing `page.tsx` segment whether it's "page.tsx" or "/page.tsx"
    const cleaned = rel.replace(/(^|\/)page\.tsx$/i, '').replace(/^\/*/, '');
    let route = '/' + cleaned;
    if (route === '/index' || route === '/') return '/';
    route = route.replace(/\/index$/, '');
    return route;
  });
  return Array.from(new Set(routes)).sort();
}

function waitForServer(url, timeout = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    (function check() {
      http.get(url, res => { res.resume(); resolve(); }).on('error', () => {
        if (Date.now() - start > timeout) reject(new Error('Timeout'));
        else setTimeout(check, 500);
      });
    })();
  });
}

function fetchRoute(route) {
  return new Promise((resolve) => {
    const url = `http://localhost:3002${route}`;
    http.get(url, (res) => {
      const { statusCode } = res;
      let raw = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => raw += chunk);
      res.on('end', () => {
        const m = raw.match(/<title[^>]*>([^<]*)<\/title>/i);
        const title = m ? m[1].trim() : '';
        resolve({ route, statusCode, title });
      });
    }).on('error', () => resolve({ route, statusCode: 0, title: '' }));
  });
}

(async function main(){
  const routes = getRoutes();
  if (!routes.length) {
    console.error('No routes found under app/');
    process.exit(2);
  }
  console.log('Found', routes.length, 'routes');

  // start server
  const out = fs.openSync('/tmp/next_start.log','a');
  const child = spawn('npm', ['run', 'start', '--', '-p', '3002'], { detached: true, stdio: ['ignore', out, out] });
  console.log('Started server pid', child.pid);

  try {
    await waitForServer('http://localhost:3002/');
  } catch (e) {
    console.error('Server did not become ready; tailing log...');
    console.error(fs.readFileSync('/tmp/next_start.log','utf8').slice(-2000));
    try { process.kill(child.pid); } catch(e){}
    process.exit(2);
  }

  const results = [];
  for (const r of routes) {
    const res = await fetchRoute(r);
    results.push(res);
    console.log(r, res.statusCode, res.title);
  }

  console.log('\n=== REPORT ===');
  results.forEach((r,i)=>{
    console.log(`${i+1}\t${r.route}\t${r.statusCode}\t${r.title}`);
  });

  try { process.kill(child.pid); console.log('Stopped server', child.pid); } catch(e){ console.error('Failed to stop server'); }
})();
