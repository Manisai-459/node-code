const { readFile, writeFile } = require('fs'); // Corrected function names: `read` to `readFile` and `write` to `writeFile`
const path = require('path');

const filepath = path.join('subfolder','mama.txt'); // Corrected the path joining
console.log(filepath);
const f = readFile('./subfolder/mama.txt', 'utf8')
console.log(f)