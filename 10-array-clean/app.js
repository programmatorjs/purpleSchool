let arr = [1, 2, 33, 4, 5, 6];

function filterArray(arr, removeFunc) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (removeFunc(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  if (!!filteredArray.length) {
    console.log(true);
  } else {
    console.log(false);
  }

  return filteredArray;
}

function removeFunc(element) {
  return element >= 1;
}

const filteredArr = filterArray(arr, removeFunc);
console.log(filteredArr);
