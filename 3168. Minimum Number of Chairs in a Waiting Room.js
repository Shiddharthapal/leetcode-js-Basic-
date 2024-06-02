/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count=0;
    let result=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='E') count++;
        else count--;
        result=Math.max(result,count);
    }
    return result;
};
