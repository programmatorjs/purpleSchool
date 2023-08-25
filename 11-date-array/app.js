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
  '29-02-2005',
  '9-02-2008',
  '31-04-2006',
];

function getDate(arrayWithDates) {
  const getFilteredArray = arrayWithDates
    .map((date) => {
      const parts = date.split(/[-/.]/);
      if (parts.length !== 3) {
        return null;
      }

      let [day, month, year] = parts.map(Number);

      const numberCheck = isNaN(day) || isNaN(month) || isNaN(year);

      if (numberCheck) {
        return null;
      }

      if (month > 12) {
        [day, month] = [month, day];
      }

      function isLeapYear(numericYear) {
        return (
          (numericYear % 4 === 0 && numericYear % 100 !== 0) ||
          numericYear % 400 === 0
        );
      }
      const daysInMonths = [
        0,
        31,
        isLeapYear(year) ? 29 : 28,
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

      if (day > daysInMonths[month] || day < 1 || month < 1 || month > 12) {
        return null;
      }

      return `${day.toString().padStart(2, '0')}-${month
        .toString()
        .padStart(2, '0')}-${year}`.replaceAll('/', '-');
    })
    .filter((elem) => elem !== null);

  return getFilteredArray;
}

console.log(getDate(dateArr));
