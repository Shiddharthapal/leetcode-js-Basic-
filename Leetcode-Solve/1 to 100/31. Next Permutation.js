/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
1. findout the break point-> first descrising  point 
2. findout the first largest number from last to breakpoint
3. swap  break point and largest number
4. reverse from breakpoint to last 
5. then return the array
*/
var nextPermutation = function (nums) {
  if (nums.length === 1) return nums;
  let i = nums.length - 1;
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i -= 1;
  }

  if (i === 0) return nums.reverse();

  let j = nums.length - 1;
  while (j >= i && nums[j] <= nums[i - 1]) {
    j -= 1;
  }
  console.log("=>", j, i);
  let temp = nums[i - 1];
  nums[i - 1] = nums[j];
  nums[j] = temp;

  let slice = nums.slice(i, nums.length);
  slice = slice.reverse();
  let t_i = 0;
  for (let index = i; index < nums.length; index++) {
    nums[index] = slice[t_i];
    t_i++;
  }
  return nums;
};

console.log(nextPermutation([5, 1, 1]));
