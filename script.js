let number = 19;
const numberDisplay = document.getElementById('number');
const numberInput = document.getElementById('number-Input');
const numberColor = document.getElementById('color');

let currentNumber = 0;

document.getElementById('plus').addEventListener('click', () => {
    number++;
    numberDisplay.textContent = number;
});

document.getElementById('minus').addEventListener('click', () => {
    number--;
    numberDisplay.textContent = number;
});

document.getElementById('Send').addEventListener('click', () => {
    const inputValue = numberInput.value;
    if (inputValue) {
        number = parseInt(inputValue);
        numberDisplay.textContent = number; 
    }
});

numberColor.addEventListener('input', (event) => { 
    document.querySelector('.counter').style.backgroundColor = event.target.value;
});