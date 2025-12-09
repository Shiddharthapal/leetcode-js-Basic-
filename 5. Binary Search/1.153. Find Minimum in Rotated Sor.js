/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.ceil((low + high) / 2);
  let result = nums[mid];
  while (low < high) {
    if (nums[low] < nums[mid]) {
      if (nums[mid] > nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      high = mid - 1;
    }
    mid = Math.ceil((high + low) / 2);
    result = Math.min(result, nums[mid]);
  }

  return result;
};
console.log(findMin([11, 10, 9, 8, 7]));
