/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let first = 0,
    last = nums.length;
  let result = -1;
  while (first <= last) {
    let mid = parseInt((first + last) / 2);
    if (nums[mid] === target) return (result = mid);
    else {
      if (nums[mid - 1] < target && nums[mid] > target) result = mid;
      else if (nums[mid + 1] > target && nums[mid] < target) result = mid + 1;
    }
    if (nums[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  if (result === -1) {
    if (nums[nums.length - 1] < target) result = nums.length;
    else if (nums[0] > target) result = 0;
  }
  return result;
};

console.log(searchInsert([1, 3, 4, 5, 6], 0));
