/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let first = 0;
  let last = 0;
  let profit = [];
  let temp = [];
  for (let i = 1; i < prices.length; i++) {
    if (prices[first] >= prices[i]) {
      first = i;
      if (profit.length > 0) {
        profit.sort((a, b) => b - a);
        temp.push(profit[0]);
        profit = [];
      }
    } else {
      let sum = prices[i] - prices[first];
      last = i;
      profit.push(sum);
    }
  }

  if (first === prices.length - 1 && last == 0) return 0;
  if (profit.length > 0) {
    profit.sort((a, b) => b - a);
    temp.push(profit[0]);
    profit = [];
  }
  temp.sort((a, b) => b - a);
  let sum=temp.length>1?temp[0]+temp[1]:temp[0];
  return sum;
};

console.log(maxProfit([6,1,3,2,4,7]));
