var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var read = fs.createReadStream('output.txt');
var write = fs.createWriteStream('output.txt.gz');
read.pipe(gzip).pipe(write);