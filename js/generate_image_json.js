const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../images');
const output = path.join(__dirname, '../images/images.json');

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Unable to scan directory', err);
        return;
    }
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    fs.writeFileSync(output, JSON.stringify(imageFiles, null, 2));
    console.log('images.json created successfully.');
});
