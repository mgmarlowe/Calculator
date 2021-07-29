const nums = document.querySelectorAll(".nums");
nums.forEach((num) => num.addEventListener('click', getNum));

let operands = [];
let a = operands[0];
let b = operands[1];

function getNum(e) {
    let num = e.target.value;
    operands.push(num);
    document.getElementById("answer-screen").textContent = operands.join("");
}

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