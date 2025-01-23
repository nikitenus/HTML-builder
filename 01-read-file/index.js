const fs = require('fs');
const path = require('node:path');

const pathName = path.join(__dirname, 'text.txt');
const readerStream = fs.createReadStream(pathName);

readerStream.on('data', (chunk) => {
  console.log(`Reabable text: \n ${chunk.toString()}`);
});
