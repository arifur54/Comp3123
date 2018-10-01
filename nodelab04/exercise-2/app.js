const say = require('say')

var suckIt = function(arg3, name)
{   
    arg3();
    //setTimeout(arg3, 1000);
    setTimeout(function () {
        say.speak(name)        
    }, 1000)    
    
}

var srryDave = function(){
    say.speak("I love you")
}


//setTimeout(suckIt, 1000, 'Tim Hortons')

suckIt(srryDave,'Sooooo')
