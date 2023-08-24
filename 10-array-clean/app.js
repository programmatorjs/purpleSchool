'use strict';

const arr = [1, 2, 33, 4, 5, 6];

function filterArray(arr, removeElement) {
  const filteredArray = [];
  for (const num of arr) {
    if (!removeElement(num)) {
      filteredArray.push(num);
    }
  }

  return filteredArray;
}

function removeElement(element) {
  return element >= 7;
}

const filteredArr = filterArray(arr, removeElement);
console.log(filteredArr);
