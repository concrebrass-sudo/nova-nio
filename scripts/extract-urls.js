import { readFileSync } from 'fs';

const content = readFileSync('/vercel/share/v0-project/nio/static/js/main.dc89b634.js', 'utf-8');

// Find all href or URL patterns containing whatsapp or wa.me
const matches = content.match(/https?:\/\/[^\s"'`\\)},;]+(?:wa\.me|whatsapp)[^\s"'`\\)},;]*/gi);
if (matches) {
  console.log("WhatsApp URLs found:");
  matches.forEach(m => console.log(m));
} else {
  console.log("No WhatsApp URLs found via regex");
}

// Also search for wa.me specifically
const waMe = content.match(/wa\.me[^\s"'`\\)},;]*/gi);
if (waMe) {
  console.log("\nwa.me patterns:");
  waMe.forEach(m => console.log(m));
}

// Search for any href with whatsapp-related content
const hrefMatches = content.match(/href[=:][^,;]{0,200}(?:whats|wa\.me)[^,;]{0,100}/gi);
if (hrefMatches) {
  console.log("\nhref patterns with WhatsApp:");
  hrefMatches.forEach(m => console.log(m));
}

// Also look for target=_blank links which WhatsApp links commonly use
const targetBlank = content.match(/.{0,100}target.*?_blank.{0,100}wa\.me.{0,100}/gi);
if (targetBlank) {
  console.log("\ntarget blank with wa.me:");
  targetBlank.forEach(m => console.log(m));
}
