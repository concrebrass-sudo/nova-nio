import { readFileSync } from 'fs';

const js = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf8');

// Find all wa.me occurrences with surrounding context
const pattern = /(.{100}wa\.me.{100})/g;
let match;
let i = 0;
while ((match = pattern.exec(js)) !== null) {
  i++;
  console.log(`\n--- Match ${i} ---`);
  console.log(match[1]);
}

// Also check for window.open or window.location patterns near whatsapp
const pattern2 = /(.{80}(?:window\.open|window\.location).{80})/g;
while ((match = pattern2.exec(js)) !== null) {
  if (match[1].includes('wa.me') || match[1].includes('whatsapp') || match[1].includes('5511998822059')) {
    console.log(`\n--- window pattern ---`);
    console.log(match[1]);
  }
}

console.log('\n\nDone.');
