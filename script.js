function add(num1, num2) {//add function
    return num1 + num2;
}

function multiply(num1, num2) {  //multiply function
    return num1 * num2;
}

function calculate(a, b) { //calculate fnction
  
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }


    
   
    console.log(operation(a, b, add));
    

    console.log(operation(a, b, multiply));
    
}


calculate(5, 3);


