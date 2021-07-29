const nums = document.querySelectorAll(".nums");
nums.forEach((num) => num.addEventListener('click', getNum));

let displayValue = 0;

document.getElementById("AC").addEventListener("click", function () {
    displayValue = 0;
    updateDisplay();
})

document.getElementById("C").addEventListener("click", function() {
    displayValue = displayValue
        .toString()
        .slice(0, -1);
    
    updateDisplay();

})

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