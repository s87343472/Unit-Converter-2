const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOGImage() {
  const svgBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'og-image.svg'));
  
  await sharp(svgBuffer)
    .resize(1200, 630)
    .png()
    .toFile(path.join(process.cwd(), 'public', 'og-image.png'));
  
  console.log('OG image generated successfully!');
}

generateOGImage().catch(console.error); 