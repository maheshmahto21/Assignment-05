const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.57, USD: 1, JPY: 110.53, AUD: 1.34, CAD: 1.25 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.53, EUR: 1, JPY: 129.71, AUD: 1.58, CAD: 1.47 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 99.16, GBP: 1, JPY: 147.41, AUD: 1.79, CAD: 1.67 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1, JPY: 1.45, AUD: 0.018, CAD: 0.017 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.69, JPY: 1, AUD: 0.012, CAD: 0.011 },
    AUD: { USD: 0.75, EUR: 0.63, GBP: 0.56, INR: 55.73, JPY: 82.78, AUD: 1, CAD: 0.94 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, INR: 59.44, JPY: 91.35, AUD: 1.06, CAD: 1 },
};

const flags = {
    USD: "https://flagcdn.com/us.svg",
    EUR: "https://flagcdn.com/eu.svg",
    GBP: "https://flagcdn.com/gb.svg",
    INR: "https://flagcdn.com/in.svg",
    JPY: "https://flagcdn.com/jp.svg",
    AUD: "https://flagcdn.com/au.svg",
    CAD: "https://flagcdn.com/ca.svg",
};

const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
};

const converterForm = document.getElementById('converterForm');
const resultDiv = document.getElementById('result');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const fromFlag = document.getElementById('fromFlag');
const toFlag = document.getElementById('toFlag');

// Function to populate currency options
function populateCurrencyOptions() {
    const currencies = Object.keys(exchangeRates);
    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = `${currency} (${symbols[currency]})`;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = `${currency} (${symbols[currency]})`;
        toCurrencySelect.appendChild(option2);
    });
}

function updateFlagsAndSymbols() {
    fromFlag.src = flags[fromCurrencySelect.value];
    toFlag.src = flags[toCurrencySelect.value];
}

populateCurrencyOptions();
updateFlagsAndSymbols();

fromCurrencySelect.addEventListener('change', updateFlagsAndSymbols);
toCurrencySelect.addEventListener('change', updateFlagsAndSymbols);

converterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (fromCurrency !== toCurrency) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultDiv.innerHTML = `${symbols[fromCurrency]}${amount} ${fromCurrency} = ${symbols[toCurrency]}${convertedAmount} ${toCurrency}`;
    } else {
        resultDiv.innerHTML = "Please select different currencies.";
    }
});
