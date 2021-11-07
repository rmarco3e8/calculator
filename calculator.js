content = "0";
num1 = NaN;
num2 = NaN;
op = "";


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
    return Math.floor(a / b);
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return;
    }
}

function numButton(e) {
    input = e.target.innerText;
    updateContent(input);
}

function updateContent(input) {
    if (!isNaN(input)) {
        if (content === "0") {
            content = "";
        }
        content += input;
        changeDisplay(content);
        return;
    } 
    
    else if (input === ".") {
        console.log("TODO");
        return;
    } 
    
    else if (input === "=") {
        num2 = parseInt(content);
        res = operate(op, num1, num2);
        num1 = NaN;
        num2 = NaN;
        content = toString(res);
        changeDisplay(res);
    }
     
    else {
        num1 = parseInt(content);
        op = input;
        clear();
    }
}

function del() {
    content = content.substring(0, content.length-1);
    if (content === "") {
        content = "0";
    }
    changeDisplay(content);
}

function clear() {
    content = "0";
    changeDisplay(content);
}

function changeDisplay(content) {
    display = document.querySelector(".display");
    display.innerText=content;
}

padButtons = document.querySelectorAll(".pad");
padButtons.forEach(padButton => padButton.addEventListener('click', numButton));

clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);

delButton = document.querySelector(".delete");
delButton.addEventListener('click', del);