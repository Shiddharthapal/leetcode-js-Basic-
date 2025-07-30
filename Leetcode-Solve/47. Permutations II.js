/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length === 1) return [nums];
  let len = nums.length;
  let result = [];
  let map = new Map();
  var dfs = (first) => {
    if (first === len) {
      let temp = [...nums];
      let temp2 = temp.join("");
      if (!map.has(temp2)) {
        map.set(temp2, 1);
        result.push([...nums]);
      }
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
console.log(permuteUnique([1, 2, 3]));
