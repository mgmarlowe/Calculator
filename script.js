let nums = [];

function add (a ,b) {
    console.log(a);
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if(a===0 || b === 0){
        return "Nice try, but no thanks!"
    }
    return a / b;
}

function operate (a, operator, b) { 
   switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }  
}