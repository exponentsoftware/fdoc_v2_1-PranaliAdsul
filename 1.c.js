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