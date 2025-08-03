/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let near = 0,
    far = 0,
    jump = 0;

  while (far < nums.length - 1) {
    let final_far = 0;
    for (let i = near; i <= far; i++) {
      final_far = Math.max(final_far, i + nums[i]);
    }
    near = far + 1;
    far = final_far;
    jump++;
  }
  return jump;
};
console.log(jump([2, 3, 1, 1, 4]));
