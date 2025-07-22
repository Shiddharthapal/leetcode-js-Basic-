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
console.log(
  jump([
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
  ])
);
