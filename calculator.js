const add = function ( a , b) {
    return a + b
}

const subtract  = function ( a , b ) {
    return a - b;
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