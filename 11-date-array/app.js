'use strict';

const dateArr = [
  '10-02-2022',
  'тест',
  '11/12/2023',
  '00/13/2022',
  '41/12/2023',
];

function getDate(arrayWithDates) {
  const correctDates = [];

  for (let i = 0; i < arrayWithDates.length; i++) {
    let date = new Date(arrayWithDates[i]);
    if (date.toString(arrayWithDates[i]) !== 'Invalid Date') {
      const formattedDate = date
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replaceAll('/', '-');
      correctDates.push(formattedDate);
    }
  }
  return correctDates;
}

console.log(getDate(dateArr));

console.log(new Date('10-02-2022'))