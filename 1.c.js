// 1.c. Write a function called `sumOfPrimes` that takes a number as input and returns the sum of all prime numbers less than or equal to the input number.
// ```js
// console.log(sumOfPrimes(10));
// 17 // 2 + 3 + 5 + 7 = 17
// ```
function sumOfPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfPrimes(10));
  // 17 // 2 + 3 + 5 + 7 = 17