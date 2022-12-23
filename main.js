// Get all buttons:
const buttons = document.querySelectorAll('button');
console.log(buttons)

const screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumulativeCalc = '';

function calculate(button) {
    let value = button.textContent;
    if (value === 'CLEAR') {
        calculation = [];
        screenDisplay.textContent = '.';
    } else if (value === '=') {
        // eval() method gives result after conversion to string
        let result = eval(accumulativeCalc);

        // If result is a whole number, display whole number; otherwise, round to 2 decimals:
        if (Number.isInteger(result)) {
            result = eval(accumulativeCalc);
        } else {
            result = eval(accumulativeCalc).toFixed(2);            
        }
        screenDisplay.textContent = result;
        calculation = [];
    } else {
        calculation.push(value);
        accumulativeCalc = calculation.join('');
        screenDisplay.textContent = accumulativeCalc;
    }
}

buttons.forEach(btn => btn.addEventListener('click', () => calculate(btn)))