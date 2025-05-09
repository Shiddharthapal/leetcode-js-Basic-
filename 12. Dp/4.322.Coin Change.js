/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp=new Array(amount+1).fill(Infinity);

    dp[0]=0;
    for(let i=1;i<=amount;i++){// i=amount, dp[amount]=number of coin
        for(let coin of coins){
            if(coin<=i){
                dp[i]=Math.min(dp[i],dp[i-coin]+1);
                /* i=amount thake 1 ta coin(amount) subtrack korar por je amount 
                thake oi amount er index a giye je koita coin pabo tar sathe +1 
                korte hbe .karon ami 1 ta coin  subtrack korche tai oi 1 ta coin 
                add korte hbe*/
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount];
};

console.log(coinChange([1,2],3));