/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) return [[1]];
  let array = new Array(n).fill(null).map(() => new Array(n).fill(null));
  let index1 = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let index2 = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let index = index1;
  let value = 1;
  let flag = 0;
  const traverse = (i, j) => {
    if (i >= n || j >= n || i < 0 || j < 0 || array[i][j]) return;
    array[i][j] = value;
    value++;

    if (flag === 1 && array[i - 1][j]) {
      index = index1;
      flag = 0;
    }
    for (let k = 0; k < index.length; k++) {
      if (index[k][0] === -1 && flag === 0) {
        index = index2;
        flag = 1;
        traverse(i - 1, j);
        continue;
      }

      traverse(i + index[k][0], j + index[k][1]);
    }
  };
  traverse(0, 0);
  return array;
};

console.log(generateMatrix(2));
