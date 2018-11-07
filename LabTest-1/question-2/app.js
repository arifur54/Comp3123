const fs = require('fs');
var readStream = fs.createReadStream('data.txt');
var writeStream = fs.createWriteStream('./output.txt');



readStream.on("data", function(data){
    console.log(data)
    var data_copy = data.toString();
    console.log(data_copy)
    writeStream.write(data);
})

readStream.on('end', () => {
    writeStream.close();
    console.log("Write Complete");
})