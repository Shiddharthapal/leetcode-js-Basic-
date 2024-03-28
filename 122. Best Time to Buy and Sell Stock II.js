/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=1) return 0;
    let sum=0;
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
            sum+=(prices[i+1]-prices[i]);
        }
    }
    return sum;
};
console.log(maxProfit([5,4,3,2,1]));
