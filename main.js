// PAGE BACKGROUND FUNCTIONALITY
const bgImages = [
    'https://images.unsplash.com/photo-1557238687-f10be4e702ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9yaGVybiUyMGxpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1610989432929-9769f3cf8006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1cm9yYSUyMGJvcmVhbGlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1cm9yYSUyMGJvcmVhbGlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1525220964737-6c299398493c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGF1cm9yYSUyMGJvcmVhbGlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF1cm9yYSUyMGJvcmVhbGlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF1cm9yYSUyMGJvcmVhbGlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
]

const setBG = () => {
    let randNum = Math.floor(Math.random() * bgImages.length);
    document.body.style.backgroundImage = 'url("' + bgImages[randNum] + '")';
}
setBG();

// CALCULATOR FUNCTIONALITY
// Get all buttons:
const buttons = document.querySelectorAll('button');

// Get .screen:
const screenDisplay = document.querySelector('.screen');

let calculation = []; // will push what user inputs into this - each item will be a string
let accumulativeCalc = ''; // will be calculation.join('');
const operators = ['+', '-', '*', '/']; // to be looped thru when determining if first item input is an operator or decimal point

function calculate(button) {
    let value = button.textContent;
    calculation.push(value);
    // Check if first thing input is an operator or decimal point:
    for (let operator of operators) {
        if (operator === calculation || operator === calculation[0] || operator === calculation[calculation.length - 1] || SyntaxError) {
            screenDisplay.textContent = 'Invalid operation';
        }
        
        // If two operators are placed consecutively, the first one is eliminated & the most recently placed operator is used:
        for (let item of calculation) {
            if (item === operator) {
                let firstOpIndex = calculation.indexOf(operator);
                // loop again thru operators to check if the item after the first operator in calculation array is also an op:
                for (let op of operators) {
                    if (calculation[firstOpIndex + 1] === op) {
                        calculation.splice(firstOpIndex, 1);
                    }
                }
            }
        }
    }

    // Check if too many characters (extending operation or number wider that width of .screen)
    if (calculation.length >= 10) {
        calculation = []
        screenDisplay.textContent = 'Can display 10 chars, but operation possible';
    } else if (value === 'CLEAR') { // if 'clear' btn is hit, reset calculation and display default screen text content
        calculation = [];
        screenDisplay.textContent = '.';
    } else if (value === '=') {  // if 'equals' btn is hit, evaluate what user input
        let result = eval(accumulativeCalc); // eval() method gives result after conversion to string

        // If result is a whole number, display whole number; otherwise, round to 2 decimals:
        if (Number.isInteger(result)) {
            result = eval(accumulativeCalc);
        } else {
            result = eval(accumulativeCalc).toFixed(2);            
        }

        // If result is infinity (division by zero), display err message - if not, display the result:
        if (result === 'Infinity') {
            screenDisplay.textContent = 'Invalid operation';
        } else {
            screenDisplay.textContent = result;
        }
        calculation = []; // reset calculation once operation is done
        calculation.push(result); // push result to calculation array so consecutive ops can be run
    } else { // below is what happens when neither 'clear' or 'equals' is hit - as in, operation is ongoing
        //calculation.push(value);
        accumulativeCalc = calculation.join('');
        screenDisplay.textContent = accumulativeCalc;
    }
}

buttons.forEach(btn => btn.addEventListener('click', () => calculate(btn)))