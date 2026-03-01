/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  let dataStore = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (let i = 0; i < dataStore.length; i++) {
    if (num <= 0) break;
    if (num >= dataStore[i][0]) {
      let tempResult = Number.parseInt(num / dataStore[i][0]);
      num -= tempResult * dataStore[i][0];
      while (tempResult--) result += dataStore[i][1];
    }
  }
  return result;
};

console.log(intToRoman(3799));
