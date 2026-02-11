import { readFileSync } from 'fs';

const content = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf-8');

// Find all wa.me URLs
const regex = /https?:\/\/wa\.me[^\s"'`,)}\]\\]*/g;
const matches = content.match(regex);

if (matches) {
  console.log("Found WhatsApp URLs:");
  matches.forEach((m, i) => {
    // Find surrounding context
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
