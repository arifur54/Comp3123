// create named function expression to write the data
var writeData = function(files,data,loopCount){
    // require file system module
    const fs = require('fs');

    // create the writable stream to create a file 
    const file = fs.createWriteStream(files);
    for(let i=0; i<=loopCount;i++)
    {
        files = file.write(data);
    }
    file.end();
}

// export the writeData function to be used elsewhere

module.exports = {
    writeData: writeData
}