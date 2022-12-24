// Get all buttons:
const buttons = document.querySelectorAll('button');

// Get .screen:
const screenDisplay = document.querySelector('.screen');

let calculation = []; // will push what user inputs into this - each item will be a string
let accumulativeCalc = ''; // will be calculation.join('');
const operators = ['+', '-', '*', '/', '.']; // to be looped thru when determining if first item input is an operator or decimal point

function calculate(button) {
    let value = button.textContent;
    console.log(calculation)
    console.log(calculation[0])
    // Check if first thing input is an operator or decimal point:
    for (let operator of operators) {
        if (operator === calculation || operator === calculation[0] || operator === calculation[calculation.length - 1]) {
            screenDisplay.textContent = 'Invalid operation';
        }
    }

    // Check if too many characters (extending operation or number wider that width of .screen)
    if (calculation.length >= 10) {
        console.log(screenDisplay.textContent);
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
    } else { // below is what happens when neither 'clear' or 'equals' is hit - as in, operation is ongoing
        calculation.push(value);
        accumulativeCalc = calculation.join('');
        screenDisplay.textContent = accumulativeCalc;
    }
}

buttons.forEach(btn => btn.addEventListener('click', () => calculate(btn)))