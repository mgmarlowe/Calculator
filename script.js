let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let final = false;
let result = null;

const nums = document.querySelectorAll(".nums");
nums.forEach((num) => num.addEventListener("click", getNum));

const ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", evalOperator));
ops.forEach((op) => op.addEventListener("click", resetDecimal));

const decimal = document.getElementById("op.");
decimal.addEventListener("click", getNum, { once: true });

document.getElementById("opEqu").addEventListener("click", equals);
document.getElementById("opEqu").addEventListener("click", resetDecimal);

document.getElementById("AC").addEventListener("click", function () {
  displayValue = 0;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  final = false;
  result = null;
  updateDisplay();
});

document.getElementById("C").addEventListener("click", function () {
  displayValue = displayValue.toString().slice(0, -1);

  if (displayValue === "") {
    displayValue = 0;
  }
  updateDisplay();
});

function resetDecimal() {
  decimal.addEventListener("click", getNum, { once: true });
}

function evalOperator(e) {
  if (final) {
    final = false;
    firstOperand = displayValue;
    firstOperator = e.target.value;
  } else if (firstOperator === null && firstOperand === null) {
    firstOperator = e.target.value;
    firstOperand = displayValue;
  } else if (firstOperator != null && secondOperand === null) {
    secondOperator = e.target.value;
    secondOperand = displayValue;
    displayValue = operate(
      Number(firstOperand),
      firstOperator,
      Number(secondOperand)
    );
    updateDisplay();
    result = displayValue;
    firstOperator = secondOperator;
    firstOperand = result;
    secondOperator = null;
    secondOperand = null;
  }
}

function equals() {
  if (firstOperator === null) {
    // if there's no first number
    displayValue = displayValue;
  } else if (!final) {
    // if there is no result
    secondOperand = displayValue;
    displayValue = operate(
      Number(firstOperand),
      firstOperator,
      Number(secondOperand)
    );
    result = displayValue;
    updateDisplay();

    final = true;
  }
}

function getNum(e) {
  let num = e.target.value;
  if (final === true) {
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    final = false;
    result = null;
    displayValue = 0;
    updateDisplay();
  }

  if (firstOperand === null) {
    if (displayValue === 0 || displayValue === "0") {
      displayValue = num;
    } else {
      displayValue += num;
    }
  } else if (secondOperand === null) {
    if (displayValue === firstOperand) {
      displayValue = num;
    } else {
      displayValue += num;
    }
  } else if (result != null) {
    if (displayValue === result) {
      displayValue = num;
    } else {
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

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Nice try, but no thanks!";
  }
  return a / b;
}

function operate(a, firstOperator, b) {
  switch (firstOperator) {
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
