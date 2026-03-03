import { readFileSync } from 'fs';

const content = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf-8');
const regex = /https?:\/\/wa\.me\/[^\s"')]+/g;
const matches = content.match(regex);
console.log("Found wa.me links:", matches);
