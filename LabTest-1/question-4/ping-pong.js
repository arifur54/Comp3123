var events = require('events');
var moment = require('moment')
var emitter = new events.EventEmitter();
var i = 0;
 
emitter.on('ping', ping);
emitter.on('pong', pong);
 
function ping () {
    if(i < 15){
        setTimeout(() => {
            console.log('Ping! -- ', 'Count: ' + i +' -- ', 'Time:', moment().format('h:mm:ss a'))
            emitter.emit('pong')
        },1000)
        i++
    }else{
         console.log("game over");
    }
    
       


}
 
function pong () {
    if(i<15){
        setTimeout(() => {
            console.log('Pong! -- ', 'Count: ' + i +' -- ', 'Time:', moment().format('h:mm:ss a'))
            emitter.emit('ping')
        },1000)
        i++
    }else{
        console.log("game over");
    }
    
        

    
}
emitter.emit('ping')