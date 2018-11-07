var should = require('should');
var cal = require('./Calculator');

// cal.multiplyTwoNumbers("a","b");
// cal.evenDoubler("c");

describe('Calculator', function(){
    describe('when Multiplying two numbers', function(){
        it('Should Multiply Two Numbers correctly 2*2 = 4', function(){
            cal.multiplyTwoNumbers(2,2).should.equals(4);
        });
        it('Should Multiply Two Numbers Correctly 2*5= 10', function(){
            cal.multiplyTwoNumbers(2,5).should.equals(10);
        });
        it('Multply Two numbers Should not equal 2*2 = 5', function(){
            cal.multiplyTwoNumbers(2,2).should.not.equals(5);
        })
        it('Should Throw error = "x" * "y"', function(){
            (function(){cal.multiplyTwoNumbers("x","y").should.throwError;})
        })
    })

    describe('even doubler', function(){
        it('Even double when even 2 = 4', function(){
            cal.evenDoubler(2).should.equal(4);
        });
        it('Should not double when odd 3 = 9', function(){
            cal.evenDoubler(3).should.not.equal(9);
        });
        it('should equal zero when odd 9 => 0', function(){
            cal.evenDoubler(9).should.equal(0);
        })
    })
    
})