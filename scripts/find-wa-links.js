import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

// Debug: find the file
console.log("CWD:", process.cwd());
console.log("Dir contents:", readdirSync('.'));

// Try multiple paths
const paths = [
  'nio/static/js/main.dc89b634.js',
  '../nio/static/js/main.dc89b634.js',
  '/home/user/nio/static/js/main.dc89b634.js',
  '/vercel/share/v0-project/nio/static/js/main.dc89b634.js',
];

let content = null;
for (const p of paths) {
  try {
    content = readFileSync(p, 'utf-8');
    console.log("Found file at:", p);
    break;
  } catch (e) {
    console.log("Not at:", p);
  }
}

if (!content) {
  console.log("Could not find the JS file");
  process.exit(1);
}

// Find all wa.me URLs
const regex = /https?:\/\/wa\.me[^\s"'`,)}\]\\]*/g;
const matches = content.match(regex);

if (matches) {
  console.log("Found WhatsApp URLs:");
  matches.forEach((m, i) => {
    const idx = content.indexOf(m);
    const start = Math.max(0, idx - 80);
    const end = Math.min(content.length, idx + m.length + 80);
    console.log(`\n--- Match ${i + 1} ---`);
    console.log(`URL: "${m}"`);
    console.log(`Context: ...${content.substring(start, end)}...`);
  });
} else {
  console.log("No wa.me URLs found");

  // Try broader search
  const broader = /whatsapp|wa\.me/gi;
  const broaderMatches = [...content.matchAll(broader)];
  console.log(`\nBroader search found ${broaderMatches.length} matches:`);
  broaderMatches.forEach((m, i) => {
    const idx = m.index;
    const start = Math.max(0, idx - 100);
    const end = Math.min(content.length, idx + m[0].length + 100);
    console.log(`\n--- Match ${i + 1} ---`);
    console.log(`Text: "${m[0]}"`);
    console.log(`Context: ...${content.substring(start, end)}...`);
  });
}
