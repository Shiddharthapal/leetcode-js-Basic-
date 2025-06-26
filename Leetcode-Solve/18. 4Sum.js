/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = [];
  let num = nums.sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (right > left) {
        let tempResult = [];
        let temp = num[i] + num[j] + num[left] + num[right];
        if (temp === target) {
          tempResult.push(num[i]);
          tempResult.push(num[j]);
          tempResult.push(num[left]);
          tempResult.push(num[right]);

          if (!map.has(tempResult.toString())) {
            result.push(tempResult);
            map.set(tempResult.toString(), 1);
          }
          left++;
          right--;
        } else if (temp < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(fourSum([2, 2, 2, 2], 8));
