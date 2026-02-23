// DOM
const valueEl = document.querySelector('#amount');
const percentEl = document.querySelector('#percent');
const donatePercent = document.querySelector('#donatePercent');
const tipValue = document.querySelector('#tip');
const totalValue = document.querySelector('#total');
const form = document.querySelector('#tip-form');
const resultsArea = document.querySelector('.results-area');

// Events
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

percentEl.addEventListener('input', () => {
    donatePercent.innerHTML = `${percentEl.value}%`;

    if (valueEl.value.trim().length > 0 && percentEl.value > 0) {
        calculateTip();
    }
})

document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && valueEl.value.trim().length > 0 && percentEl.value > 0) {
        calculateTip();
    }
});

// Functions
function calculateTip() {
    let value = Number(valueEl.value);
    let percent = Number(percentEl.value);

    resultsArea.style.display = 'block';

    let tip = value * (percent / 100);
    let total = value + tip;

    tipValue.innerHTML = convertMoney(tip);

    totalValue.innerHTML = convertMoney(total);
};

function convertMoney(number) {
    return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });;
};