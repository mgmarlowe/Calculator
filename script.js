let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let operator = null;

const nums = document.querySelectorAll(".nums");
nums.forEach((num) => num.addEventListener('click', getNum));

const ops = document.querySelectorAll(".operand");
ops.forEach((op) => op.addEventListener("click", evalOperand));

document.getElementById("opEqu").addEventListener("click", equals);

document.getElementById("AC").addEventListener("click", function() {
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    operator = null;
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

function evalOperand(e) {
    firstOperand = displayValue;

    if(e.target.id === "opEqu") {
        equals();
    }
    else{
        operator = e.target.value;
    }
}

function equals() {
    console.log("Equals");
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    operator = null;
    updateDisplay();
}

function getNum(e) {
    let num = e.target.value;
    if (displayValue === 0 || displayValue === "0") {
        displayValue = num;
    }
    else{
        displayValue += num;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("answer-screen").textContent = displayValue;
}

updateDisplay();

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
    if(b === 0){
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