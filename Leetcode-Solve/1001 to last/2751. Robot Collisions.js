/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  let array = [];
  for (let i = 0; i < positions.length; i++) {
    array.push([positions[i], healths[i], directions[i], i]);
  }
  array.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][2] === "R") {
      result.push(array[i]);
    } else {
      if (result.length > 0) {
        if (result[result.length - 1][2] === "R") {
          if (result[result.length - 1][1] === array[i][1]) result.pop();
          else if (result[result.length - 1][1] > array[i][1]) {
            result[result.length - 1][1]--;
          } else {
            while (result[result.length - 1][1] <= array[i][1]) {
              array[i][1]--;
              result.pop();
            }
          }
        } else {
            result.push(array[i]);
        }
      }
    }
  }
  let final=result.sort((a,b)=>a[3]-b[3]).map(val=>val[1]);

  return final;
};
console.log(
  "survivedRobotsHealths ==> ",
  survivedRobotsHealths([1,2,5,6], [10,10,11,11],"RLRL")
);
