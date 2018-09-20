// function greet(){
//     for(var x = 0; x <= 10; x++){
//         console.log("Hello, World");
//     }
//     getCurrentDateTime();    
   
// }

// function getCurrentDateTime()
// {
//     var ddate = new Date();
//     console.log("Current Date: " + ddate.toLocaleDateString() + " Current Time: " + ddate.toLocaleTimeString());
    
    

// }
// greet();

var moment = require('moment');

var greet = function(){
    var wrapped = moment(new Date());
    console.log(wrapped);
}

greet();