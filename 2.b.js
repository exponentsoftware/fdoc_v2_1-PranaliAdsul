// 2.b. Write a function called `findMissingNumber` that takes an array of integers from 1 to n with one number missing and returns the missing number.
// ```js
// const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// console.log(findMissingNumber(arr));
function findMissingNumber(arr){
    const n = (arr.length +1);
    const expectedSum = (n * (n+1))/2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum -actualSum;
    
  }
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  console.log(findMissingNumber(arr));