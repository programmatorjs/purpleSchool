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
  '02-01-2023',
  '01-02-2023',
];

function transformDateStringToArray(dateString) {
    let [month, day, year] = dateString.split('/');

    if (!year) {
        [day, month, year] = dateString.split('-');
    }

    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }

    return [day, month, year];
}

function getDate(arrayWithDates) {
  const getFilteredArray = arrayWithDates
    .map((date) => {
      const parts = transformDateStringToArray(date); 
      if (!parts) {
        return null;
      }

      let [day, month, year] = parts.map(Number);

      if (month > 12 && month) {
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


const validDates = getDate(dateArr);
console.log(validDates);
