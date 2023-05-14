// 2.d. Write a function called `findMaximumSubarray` that takes an array of integers as input and returns the maximum sum of any contiguous subarray within the input array.
// ```js
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(findMaximumSubarray(arr));
// 6 // the maximum sum subarray is [4, -1, 2, 1]
// ```

function findMaximumSubarray(arr) {
    const dp = [arr[0]];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      dp[i] = Math.max(dp[i-1] + arr[i], arr[i]);
      maxSum = Math.max(maxSum, dp[i]);
    }
    return maxSum;
  }
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(findMaximumSubarray(arr));
  