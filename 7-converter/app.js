
function currencyConversion(sum, currentCurrency, targetCurrency) {
    //central bank rate in rubles
    const buyUsd = 76.2;
    const sellUsd = 72.8;
    const buyEuro = 81;
    const sellEuro = 78;

    if(targetCurrency === 'usd' && currentCurrency === 'rub') {
        return sum / buyUsd;
    
    } else if (targetCurrency === 'rub' && currentCurrency === 'usd') {
        return sum * sellUsd;
    
    } else if (targetCurrency === 'eur' && currentCurrency === 'rub') {
        return sum / buyEuro;
    
    } else if (targetCurrency === 'rub' && currentCurrency === 'eur') {
        return sum * sellEuro
    
    } /*cross-country exchange through the ruble */
     else if (targetCurrency === 'usd' && currentCurrency === 'eur') {          
        return buyEuro / sellUsd * sum;
    
    } else if (targetCurrency === 'eur' && currentCurrency === 'usd') {
        return sellEuro / buyUsd * sum;
    };
        
};



console.log(currencyConversion(1000, 'usd', 'rub'));