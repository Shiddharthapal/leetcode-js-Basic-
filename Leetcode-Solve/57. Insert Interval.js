/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let result = [];
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (prev[1] >= interval[0]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      result.push(prev);
      prev = interval;
    }
  }
  result.push(prev);
  return result;
};
console.log(insert([[1, 5]], [0, 3]));
