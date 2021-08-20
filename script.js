let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let final = false; //make function read this. if final=true, clear display on next number button click
let result = null;

const nums = document.querySelectorAll(".nums");
nums.forEach((num) => num.addEventListener('click', getNum));

const ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", evalOperator));

document.getElementById("opEqu").addEventListener("click", equals);

document.getElementById("AC").addEventListener("click", function() {
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    final = false;
    result = null;
    updateDisplay();
})

document.getElementById("C").addEventListener("click", function() {
    displayValue = displayValue
        .toString()
        .slice(0, -1);
    
        if(displayValue === "") {
            displayValue = 0;
        }
    updateDisplay();

})

function evalOperator(e) {

    if(firstOperator === null && firstOperand === null){
        firstOperator = e.target.value;
        firstOperand = displayValue;
        console.log(firstOperand,  firstOperator);
    }
    else if (firstOperator != null && secondOperand === null) {
        secondOperator = e.target.value;
        secondOperand = displayValue;
        displayValue = operate(Number(firstOperand), firstOperator, Number(secondOperand));
        updateDisplay();
        result = displayValue;
        firstOperator = secondOperator;
        firstOperand = result;
    }
    else {

    }
}

function equals() {
    console.log("Equals");

    if(firstOperand === null) {
        displayValue = displayValue;
        console.log("first equ");
    }
    else if(firstOperand != null && firstOperator === null) {
        displayValue = displayValue;
        console.log("op null");
    }
/*    else if(firstOperand != null && secondOperator === null) {
        displayValue = displayValue;
    } */
    else if (result != null) {
        secondOperand = displayValue;
        displayValue = operate(Number(firstOperand), firstOperator, Number(secondOperand));
        result = displayValue;
        updateDisplay();
    }

/*    updateDisplay();
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    final = true;  */
}

function getNum(e) {
    let num = e.target.value;
    if (final === true) {
        displayValue = 0;
    }

    if(firstOperand === null){
        if (displayValue === 0 || displayValue === "0") {
            displayValue = num;
        }
        else{
            console.log("Add?")
            displayValue += num;
        }
    }
    else if(secondOperand === null){
        if(displayValue === firstOperand){
            displayValue = num;
            console.log(firstOperand);
        }
        else{
            displayValue += num;
            console.log("second");
        }
    }
    else if (result !=null) {
        if (displayValue === result) {
            displayValue = num;
            console.log("here");
        }
        else{
            displayValue += num;
        }
    }
    final = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("answer-screen").textContent = displayValue;
}

updateDisplay();

function add (a ,b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if(b === 0){
        return "Nice try, but no thanks!"
    }
    return a / b;
}

function operate (a, firstOperator, b) { 
    console.log(firstOperator);
   switch (firstOperator) {
        case "+":
            console.log("add");
            return add(a, b);
        case "-":
            console.log("subtract");
            return subtract(a, b);
        case "*":
            console.log("multiply");
            return multiply(a, b);
        case "/":
            console.log("divide");
            return divide(a, b);
    }  
}