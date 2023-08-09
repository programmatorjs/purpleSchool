const arr = [1, 40, -5, -55, 0, 10];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let tmp = arr[j];
      [tmp, arr[j], arr[j + 1]] = [arr[j], arr[j + 1], tmp];
    }
  }
}

console.log(arr);
