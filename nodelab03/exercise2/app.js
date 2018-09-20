// Require built in file system module

const tWriter = require('./writer');

console.log(tWriter.writeData('./writer.txt', 'Writer Something in Files\n', 10));