'use strict';

const card1 = '4561-2612-1234-5464';
const card2 = '4123-4567-8901-2349';
const card3 = '4561-2612-1234-5467';


function checkCard(card) {
  const arrNum = card
    .replaceAll('-', '')
    .split('')
    .map((num) => Number(num));

  let totalAmount = 0;
  const startIndex = arrNum.length % 2 === 0 ? 0 : 1;

  for (let i = 0; i < arrNum.length; i ++) {
    let digit = arrNum[i];
    if ((i + startIndex) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    totalAmount += digit;
  }
  console.log(totalAmount);
  return totalAmount % 10 === 0;
}

console.log(checkCard(card1));
console.log(checkCard(card2));
console.log(checkCard(card3));



