const add = function ( a , b) {
    return Number(a) + Number(b);
}

const subtract  = function ( a , b ) {
    return Number(a) - Number(b);
}

const multiply = function ( a , b ) {
    return a * b;
}

const divide = function ( a , b ) {
    return a / b;
}

let num1;
let operator;
let num2;

const operate = function( num1, operator, num2) {
    if(operator === '+') return add( num1, num2 );
    if(operator === '-') return subtract( num1, num2 );
    if(operator === '*') return multiply( num1, num2 );
    if(operator === '/') return divide( num1, num2 );
}

const numBtns = document.querySelectorAll(".number");
const clearBtn = document.querySelector("#clear");
const opBtns = document.querySelectorAll(".operator")
const eqBtn = document.querySelector("#equals");
const displayContent = document.querySelector("#screen");

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let numStore = button.id;
        displayContent.textContent = displayContent.textContent + numStore;
    });
});

opBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let opStore = (button.id).toString();
        displayContent.textContent = displayContent.textContent + opStore;
    })
})

clearBtn.addEventListener("click",() => displayContent.textContent = "");

eqBtn.addEventListener("click",() => {
    expression = (displayContent.textContent).split('');
    alert(expression);
    displayContent.textContent = operate(expression[0],expression[1],expression[2]);
});