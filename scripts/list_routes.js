const fs = require('fs');
const path = require('path');

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

const unique = Array.from(new Set(routes)).sort();
fs.writeFileSync('/tmp/routes.txt', unique.join('\n'));
console.log('Wrote', unique.length, 'routes to /tmp/routes.txt');
