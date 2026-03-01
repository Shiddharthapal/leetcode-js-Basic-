/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let far = 0;
  let near = 0;
  let far_first = 0;

  while (far_first < nums.length - 1) {
    far_first = 0;
    for (let i = near; i <= far; i++) {
      far_first = Math.max(far_first, i + nums[i]);
    }
    near = far + 1;
    far = far_first;
    if (near > far) return false;
  }
  return true;
};

console.log(canJump([0, 2, 1, 3, 4]));
