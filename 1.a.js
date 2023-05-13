function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

const arr = [4, 2, 6, 8, 4, 1, 4];
console.log(countOccurrences(arr, 4)); // output: 3
