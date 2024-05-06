/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length<needle.length) return -1;
    let first=0;
    let j=0;
    let again=0;
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]===needle[j] ){
            j++;
            if(needle.length===j){
                return first;
            }
        }else{
            again++;
            i=again-1;
            first=i+1;
            j=0;
        }
    }
    return -1;
};
console.log(strStr("mississippi","issi"));
