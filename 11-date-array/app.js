'use strict';

const dateArr = [
  '10-02-2022',
  'тест',
  '11/12/2023',
  '00/13/2022',
  '41/12/2023',
];

function getDate(arrayWithDates) {
  const getFilteredArray = arrayWithDates
    .map((date) => {
      const parts = date.split(/[-/.]/);
      if (parts.length !== 3) {
        return null;
      }
      const [day, month, year] = parts;
      const numericDay = Number(day);
      const numericMonth = Number(month);
      const numericYear = Number(year);

      const numberCheck = 
        isNaN(numericDay) || 
        isNaN(numericMonth) || 
        isNaN(numericYear);

      if (numberCheck) {
        return null;
      }

      const checkDayAndMonth =
        numericDay < 1 ||
        numericDay > 31 ||
        numericMonth < 1 ||
        numericMonth > 12;

      if (checkDayAndMonth) {
        return null;
      }
      return `${day}-${month}-${year}`.replaceAll('/', '-');
    })
    .filter((elem) => elem !== null);

  return getFilteredArray;
}

console.log(getDate(dateArr));

