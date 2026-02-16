import { readFileSync } from 'fs';

const content = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf-8');

// Find all wa.me URLs
const waMatches = content.match(/https?:\/\/wa\.me[^\s"')\\]*/g);
console.log('wa.me URLs found:', waMatches);

// Check if old link still exists
const oldLink = 'F4DSGQC5CDQJJ1';
console.log('Old link ID still present:', content.includes(oldLink));

// Check for new link
const newLink = '5511998822059';
console.log('New link present:', content.includes(newLink));

// Count occurrences of new link
const count = (content.match(/5511998822059/g) || []).length;
console.log('New link occurrences:', count);
