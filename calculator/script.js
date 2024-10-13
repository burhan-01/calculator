
const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value !== null) {
            if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += value;
                    display.value = currentInput;
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        }
    });
});

document.getElementById('equals').addEventListener('click', () => {
    if (operator && previousInput && currentInput) {
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        switch (operator) {
            case '+':
                currentInput = (prev + curr).toString();
                break;
            case '-':
                currentInput = (prev - curr).toString();
                break;
            case '*':
                currentInput = (prev * curr).toString();
                break;
            case '/':
                currentInput = (prev / curr).toString();
                break;
        }

        display.value = currentInput;
        previousInput = '';
        operator = null;
    }
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.value = '';
});