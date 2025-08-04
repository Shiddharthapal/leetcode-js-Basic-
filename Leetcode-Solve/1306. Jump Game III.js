/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let flag = false;
  let set = new Set();
  const recursive = (start) => {
    if (arr[start] === 0) {
      flag = true;
      return;
    }
    if (start > arr.length - 1 || start < 0 || set.has(start)) return;
    set.add(start);
    recursive(start + arr[start]);
    recursive(start - arr[start]);
  };

  recursive(start, arr[start]);
  return flag;
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
