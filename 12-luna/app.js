'use strict';

const card1 = '4561-2612-1234-5464';
const card2 = '4123-4567-8901-2349';
const card3 = '4561-2612-1234-5467';

function checkCard(card) {
  const arr = card.replaceAll('-', '').split('');
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i % 2 === 0) {
      result.push(arr[i] * 2);
    } else {
      result.push(+arr[i]);
    }
  }

  const finalCat = [];
  const res = result.map((num) => {
    if (num >= 10) {
      finalCat.push(num - 9);
    } else {
      finalCat.push(num);
    }
  });

  const sum = finalCat.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sum % 10 === 0 ? true : false;
}

console.log(checkCard(card1));
console.log(checkCard(card2));
console.log(checkCard(card3));
