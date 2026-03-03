import fs from 'fs';
const content = fs.readFileSync('/vercel/path/nio/static/js/main.dc89b634.js', 'utf8').toString();
const idx = content.indexOf('wa.me');
if (idx !== -1) {
  console.log('Context around wa.me:', content.substring(Math.max(0, idx - 80), idx + 80));
} else {
  console.log('wa.me not found');
}

