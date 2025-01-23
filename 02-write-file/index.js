const fs = require('fs');
const path = require('node:path');
const { stdin, stdout } = process;

const writeStream = fs.createWriteStream(path.join(__dirname, './text.txt'));

stdout.write('Hi, how is it going? \n');

stdin.on('data', (data) => {
  if (data.toString().toLocaleLowerCase().trim() === 'exit') {
    console.log('Have a nice day!');
    process.exit();
  } else {
    writeStream.write(data.toString());
  }
});

process.on('SIGINT', () => {
  console.log('You pressed control + C. Have a nice day!');
  process.exit();
});
