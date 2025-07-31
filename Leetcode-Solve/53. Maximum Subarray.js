/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let total = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + res > 0) {
      res += nums[i];
      if (nums[i] > res) res = nums[i];
    } else {
      if (nums[i] > 0) res = nums[i];
      else {
        if (total >= 0) res = 0;
        else res = nums[i];
      }
    }
    if (total < res) {
      total = res;
    }
  }
  return total;
};
console.log(maxSubArray([-2, 3, 1, 3]));
