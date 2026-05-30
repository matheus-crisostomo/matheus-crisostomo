const fs = require('fs');

const logoSvg = fs.readFileSync('logo-portifolio.svg', 'utf8');
const match = logoSvg.match(/data:image\/png;base64,[A-Za-z0-9+/=]+/);
if (!match) {
  console.error("No base64 found in logo-portifolio.svg");
  process.exit(1);
}
const pngBase64 = match[0];

let badgeSvg = fs.readFileSync('badge-logo.svg', 'utf8');
badgeSvg = badgeSvg.replace(/href="data:image\/svg\+xml;base64,[A-Za-z0-9+/=]+"/, `href="${pngBase64}"`);

fs.writeFileSync('portfolio-badge.svg', badgeSvg);
console.log("portfolio-badge.svg created!");
