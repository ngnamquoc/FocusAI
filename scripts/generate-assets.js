const fs = require('fs');
const path = require('path');

// Minimal 1x1 transparent PNG
const minimalPNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');

const assetsDir = path.join(__dirname, '..', 'assets');
const files = ['icon.png', 'splash.png', 'favicon.png', 'adaptive-icon.png'];

files.forEach(file => {
  fs.writeFileSync(path.join(assetsDir, file), minimalPNG);
}); 