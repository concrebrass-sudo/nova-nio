import { readFileSync } from 'fs';

const js = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf8');

// Find all wa.me URLs
const regex = /https?:\/\/wa\.me\/[0-9]+/g;
const matches = js.match(regex);
console.log('WhatsApp URLs found:', matches);

// Also look for any whatsapp.com URLs
const regex2 = /https?:\/\/[^"'\s]*whatsapp[^"'\s]*/gi;
const matches2 = js.match(regex2);
console.log('WhatsApp.com URLs found:', matches2);
