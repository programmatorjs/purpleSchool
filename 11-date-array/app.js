'use strict';

const dateArr = [
  '10-02-2022',
  'тест',
  '11/12/2023',
  '00/13/2022',
  '41/12/2023',
  '30-02-2002',
  '31-04-2000',
  '29-02-2004',
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
        isNaN(numericDay) || isNaN(numericMonth) || isNaN(numericYear);

      if (numberCheck) {
        return null;
      }

      function isLeapYear(numericYear) {
        return (
          (numericYear % 4 === 0 && numericYear % 100 !== 0) ||
          numericYear % 400 === 0
        );
      }
      const validDaysMonth = [
        0,
        31,
        isLeapYear(numericYear) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];

      if (numericDay > validDaysMonth[numericMonth]) {
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
