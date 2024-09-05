/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp=new Array(s.length+1).fill(0);

    dp[0]=1;
    dp[1]=s[0]=='0'?0:1;

    for(let i=2;i<=s.length;i++){
        let onedigit=parseInt(s.slice(i-1,i));
        let twodigit=parseInt(s.slice(i-2,i));

        if(onedigit>0) dp[i]+=dp[i-1];
        if(twodigit>=10 && twodigit<=26) dp[i]+=dp[i-2];
    }
    return dp[s.length];
}

console.log(numDecodings("221"));
