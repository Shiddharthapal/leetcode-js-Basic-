/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===1) return 0;
    /*let x=prices[0],y=0,max=0;
    for(let i=1;i<prices.length;i++){
        if(x>prices[i]){
            x=prices[i];
            y=0;
        }
        if(prices[i-1]<prices[i]){
            y=prices[i];
        }
        max=Math.max(max, y-x);
    }
    return max;*/
    let left_p=0;
    let max=0;
    for(let r_p=1;r_p<prices.length;r_p++){
        let sum=prices[r_p]-prices[left_p];
        max=Math.max(max,sum);
        if(prices[left_p]>prices[r_p]) left_p=r_p;


    }
    return max;
};
console.log(maxProfit([2,4,1]));