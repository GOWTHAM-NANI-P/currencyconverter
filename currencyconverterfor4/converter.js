async function convertCurrency() {
    
            
    var amount = parseFloat(document.getElementById('ele').value);
    var fromCurrency = document.getElementById('input').value;
    var toCurrency = document.getElementById('output').value;
    var conversionRate;
    
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    
    console.log(data);
    conversionRate = data.rates[toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById('ans').textContent = convertedAmount.toFixed(2);
    

}