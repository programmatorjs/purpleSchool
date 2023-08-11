function currencyConversion(sum, currentCurrency, targetCurrency) {
  //central bank rate in rubles
  const buyUsd = 76.2;
  const sellUsd = 72.8;
  const buyEuro = 81;
  const sellEuro = 78;

  const currencyPair = `${currentCurrency}/${targetCurrency}`;

  switch (currencyPair) {
    case 'usd/rub':
      return sum / buyUsd;
      break;
    case 'rub/usd':
      return sum * sellUsd;
      break;
    case 'eur/rub':
      return sum / buyEuro;
      break;
    case 'rub/eur':
      return sum * sellEuro;
      break;
    case 'usd/eur':
      return (sellEuro / buyUsd) * sum;
      break;
    case 'eur/usd':
      return (buyEuro / sellUsd) * sum;
      break;
    default:
      return 'Обмен данной валюты не осуществляется';
      break;
  }
}

console.log(currencyConversion(1000, 'usd', 'rub'));
