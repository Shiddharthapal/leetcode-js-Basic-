/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s||s.length===1) return s;

    let maxLength=1;
    let end=s.length-1;
    const findPalindrome= function(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            let currentLength=right-left+1;
            if(currentLength>maxLength){
                maxLength=currentLength;
                end=right;
            }

            left--;
            right++;
        }

    }
    
    for(let i=0;i<s.length;i++){
        findPalindrome(i,i);
        findPalindrome(i,i+1);
    }
    return s.substring(end-maxLength+1,end+1);
};

console.log(longestPalindrome("babad")); 