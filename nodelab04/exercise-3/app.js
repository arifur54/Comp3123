var should = require('should');
var calc = require('./calculator');

calc.add("a" , "b")

describe('Calculator', function(){
    describe('when used Syncronesly ', function(){
        it('should add two numbers correctly', function(){
           calc.add(2,2).should.equal(4);
        });
    })
});