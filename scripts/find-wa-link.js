const fs = require('fs');
const content = fs.readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf8');
const matches = content.match(/https?:\/\/wa\.me\/[^\s"')]+/g);
console.log('Links encontrados:', matches);
