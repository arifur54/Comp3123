module.exports = {
    multiplyTwoNumbers: function(num1, num2){
        if(!Number.isInteger(num1) && !Number.isInteger(num2)){
            throw("number is not an Integer");
        }else{
            //throw("number is not an Integer");
            return num1 * num2;
        }
    },
    evenDoubler: function(x){
        if(!Number.isInteger(x)){
            throw("Number is not an Integer")
        }
        if(x%2==0){
            return x*x;
        }else if(x%2==1){
            return 0;
        }

    }
}