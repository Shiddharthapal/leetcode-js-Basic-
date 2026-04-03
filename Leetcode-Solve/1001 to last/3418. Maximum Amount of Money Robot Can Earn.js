/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function (coins) {
  let row = coins.length;
  let col = coins[0].length;
  let result = Number.MIN_SAFE_INTEGER;
  const allmemo = Array(row)
    .fill(0)
    .map(() =>
      Array(col)
        .fill(0)
        .map(() => Array(3)),
    );
  var visit_allnode = function (i, j, defect) {
    if (i >= row || j >= col) return -Infinity;
    if (i === row - 1 && j === col - 1) {
      if (defect > 0 && coins[i][j] < 0) return 0;
      else return coins[i][j];
    }

    if (allmemo[i][j][defect] !== undefined) return allmemo[i][j][defect];
    let result;
    let value = coins[i][j];

    if (value < 0 && defect > 0) {
      let neutralized =
        0 +
        Math.max(
          visit_allnode(i + 1, j, defect - 1),
          visit_allnode(i, j + 1, defect - 1),
        );

      let unneutralized =
        value +
        Math.max(
          visit_allnode(i + 1, j, defect),
          visit_allnode(i, j + 1, defect),
        );

      result = Math.max(neutralized, unneutralized);
    } else {
      result =
        value +
        Math.max(
          visit_allnode(i + 1, j, defect),
          visit_allnode(i, j + 1, defect),
        );
    }
    allmemo[i][j][defect] = result;
    return result;
  };
  return visit_allnode(0, 0, 2);
};

console.log(
  maximumAmount([
    [-16, 8, -7, -19],
    [6, 3, -10, 13],
    [13, 15, 4, -3],
    [-16, 4, 19, -12],
  ]),
);
