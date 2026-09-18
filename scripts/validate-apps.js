const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'apps');
const required = ['id', 'name', 'version', 'icon', 'color', 'description', 'permissions', 'dependencies', 'changelog', 'render'];
const errors = [];
for (const dir of fs.readdirSync(root, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  if (dir.name.startsWith('.')) continue;
  const appDir = path.join(root, dir.name);
  const manifest = path.join(appDir, 'manifest.js');
  const readme = path.join(appDir, 'README.md');
  if (!fs.existsSync(manifest)) { errors.push(`${dir.name}: missing manifest.js`); continue; }
  const source = fs.readFileSync(manifest, 'utf8');
  for (const field of required) if (!source.includes(field)) errors.push(`${dir.name}: manifest is missing ${field}`);
  if (!/^\s*window\.ArnuxAppManifest\s*=/.test(source)) errors.push(`${dir.name}: manifest must assign window.ArnuxAppManifest`);
  if (!fs.existsSync(readme)) errors.push(`${dir.name}: missing README.md`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated ${fs.readdirSync(root, {withFileTypes:true}).filter(x=>x.isDirectory()).length} Arnux app(s).`);
