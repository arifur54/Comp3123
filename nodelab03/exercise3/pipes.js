// Actual Name pipe Not Pipes
// require built in request module
var request = require('request');

// require built in file module
var fileSystem = require('fs');

var tWriteData = require('../exercise2/writer');

request('http://www.google.com', function(error,response,body){
    //console.log('error:' , error); //prints the error if one occured
    //console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received 
    'body:', body; // print the HTML for the google homepage. 
    tWriteData.writeData('./output.html', body, 0);
})

