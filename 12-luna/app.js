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
  const startIndex = arrNum.length % 2 === 0 ? 1 : 0;

  for (let i = startIndex; i < arrNum.length; i += 2) {
    let digit = arrNum[i] * 2;
    if (digit > 9) {
      digit -= 9;
    }
    totalAmount += digit;
  }

  return totalAmount % 10 === 0;
}

console.log(checkCard(card1));
console.log(checkCard(card2));
console.log(checkCard(card3));
