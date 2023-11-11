var screen = document.getElementById('screen');
function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonValue = clickedButton.dataset.value;
    const displayResult = document.getElementById('result');

    switch(buttonValue){
        case 'CE':
            displayResult.textContent = '';
            break;
        case '+':
            const currentValueForSum = parseFloat(displayResult.textContent);
            runningSum += currentValueForSum;
            displayResult.textContent = '';
            break;
        case '=':
            displayResult.textContent = runningSum.toString();
            runningSum = 0;
            break;
        default:
            // Handle other cases (numeric buttons, operators, functions)
            displayResult.textContent += buttonValue;
            break;
    }
}