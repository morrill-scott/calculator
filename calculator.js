// Initalize Display and Functions

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

let firstNum = null;
let currentOp = null;
let secondNum = null;
let result = 0;

//Accesory Functions

const clearDisplay = function() {
    screen.textContent = '';
    firstNum = null;
    currentOp = null;
    secondNum = null;
}

//Makes it easier to find index of operator chars
const findLastOfMultiple = function(str,chars) {
    let lastIndex = - 1;
    for (const char of chars) {
        const index = str.lastIndexOf(char);
        if (index > lastIndex) {
            lastIndex = index;
        }
    }
    return lastIndex;
}

// Main Functions

const setOp = function(operator) {
    if(currentOp !== null){
        
        //Error Handling for clicking two operators back to back;
        let test = screen.textContent.slice(-2,-1);

        if(test === '+' || test === '-' || test === '*' || test === '/' ){
          currentOp =  operator;
          screen.textContent = screen.textContent.replace(test,'');

        //Passes if not consequitive operators
        } else {
            calculate();
        }
    } else {
        currentOp = operator;
        let index = (screen.textContent).indexOf(currentOp);
        firstNum = (screen.textContent).slice(0,index);
    }
}
const calculate = function() {
    if(currentOp === null){
        return;
    } else {
        if(currentOp !== null){
            //Find Indexes of Operators
            let firstIndex = (screen.textContent).indexOf(currentOp);
            let lastIndex = findLastOfMultiple(screen.textContent,['+','-','/','*']);

            //Test if single or double operators in expression
            if(firstIndex - lastIndex === 0){
                secondNum = (screen.textContent).substring(firstIndex + 1 ,screen.textContent.length);
            } else {
                secondNum = (screen.textContent).substring(firstIndex + 1, lastIndex);
            }

            if(currentOp === '+') add( firstNum, secondNum );
            if(currentOp === '-') subtract( firstNum, secondNum );
            if(currentOp === '*') multiply( firstNum, secondNum );
            if(currentOp === '/') divide( firstNum, secondNum );

            screen.textContent = Math.round(result * 100) / 100;
            firstNum = result;
            currentOp = null;
            secondNum = null;
        }
    }
}

// Event Listeners
buttons.forEach( button => {
    button.addEventListener('click', () => {
        if(button.className === "number"){
            screen.textContent += button.id;
        }
        //Screen updating needs to happen before setOp call for isolating
        //the operator to function. 
        if(button.className === "operator"){
            screen.textContent += button.id;
            setOp(button.id);
            
        } 
        if(button.id === "clear") clearDisplay();
        if(button.id === "equals") calculate();
    });    
});


// Basic Functions
//Use Number() because arguments may come in as Strings
const add = function ( a , b) {
    result = Number(a) + Number(b);
    
}

const subtract  = function ( a , b ) {
    result = Number(a) - Number(b);
}

const multiply = function ( a , b ) {
    result = Number(a) * Number(b);
}

const divide = function ( a , b ) {
    a = Number(a);
    b = Number(b);

    // Error processing for diving by zero
    if (b === 0) {
        alert("Nice Try, but you can't divide by 0");
        result ='';
    }
    if (b > 0 || b < 0) result = a / b;
}
