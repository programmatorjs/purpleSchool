'use strict';

const card1 = '4561-2612-1234-5464';
const card2 = '4123-4567-8901-2349';
const card3 = '4561-2612-1234-5467';

function checkCard(card) {
  const arrNum = card
    .replaceAll('-', '')
    .split('')
    .reverse()
    .map((num) => Number(num));

  for (let i = 1; i < arrNum.length; i += 2) {
    arrNum[i] *= 2;
    if (arrNum[i] > 9) {
      arrNum[i] -= 9;
    }
  }

  const sum = arrNum.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sum % 10 === 0;
}

console.log(checkCard(card1));
console.log(checkCard(card2));
console.log(checkCard(card3));
