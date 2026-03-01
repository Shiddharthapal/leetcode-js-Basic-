/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums];
  let len = nums.length;
  let result = [];
  var dfs = (first) => {
    if (first === len) {
      result.push(nums.slice() /*[...nums]*/);
      return;
    }

    for (let i = first; i < len; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      dfs(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  };
  dfs(0);
  return result;
};
console.log(permute([1, 2, 3]));
