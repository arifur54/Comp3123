var ft = require('./sportsteam');
var calc = require('./calculator');
var comp = require('./comparer')
var events = require('events');

var num1 = 5;
var num2 = 5;
// set module property
ft.teamName = 'Leafs';

var result = (comp.areNumEqual(num1,num2)) ? calc.Add(num1,num2): calc.Subtr(num1, num2);

var eventEmitter = new events.EventEmitter();

var runFn = function()
{
    console.log('I am running!!!');
}

var stayFn = function()
{
    console.log("OK, I'll stay!");
    console.log("Now Run!");
    eventEmitter.emit('run');
}

var sitFn = function(){
    console.log("I am Staying!")
}
eventEmitter
    .on('stay', stayFn)
    .on('run', runFn)
    .on('sit', sitFn);


// call module method
// ft.Cheer();
// ft.Boo();
console.log(calc.Add(num1, num2));
console.log(calc.Subtr(num1, num2));
console.log(comp.areNumEqual(num1,num2));
console.log(result);
eventEmitter.emit('stay');
eventEmitter.emit('sit');
