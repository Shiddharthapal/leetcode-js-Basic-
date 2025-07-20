//68% beats
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  var dfs = (start, target, combination) => {
    if (target === 0) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (candidates[i] > target) break;
      combination.push(candidates[i]);
      dfs(i + 1, target - candidates[i], combination);
      combination.pop();
    }
  };
  dfs(0, target, []);
  return result;
};
//38% beats
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates, target) {
//   candidates.sort((a, b) => a - b);
//   let result = [];

//   var dfs = (value, first, arr) => {
//     if (value === target) {
//       result.push([...arr]);
//       return;
//     }
//     for (let i = first; i < candidates.length; i++) {
//       if (i > first && candidates[i] === candidates[i - 1]) continue;
//       if (value > target) break;
//       value += candidates[i];
//       arr.push(candidates[i]);
//       dfs(value, i + 1, arr);
//       value -= candidates[i];
//       arr.pop();
//     }
//   };

//   dfs(0, 0, []);
//   return result;
// };

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
