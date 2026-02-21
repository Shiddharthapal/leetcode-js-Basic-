/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    
    let result=0;
    let current=1;
    let prev=0;
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]) current++;
        else{
            prev=current;
            current=1;
        }
        if(current<=prev) result++;
    }
    return result;
};

console.log(countBinarySubstrings("10101"));
