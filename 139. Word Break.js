/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let set=new Set(wordDict);
    let temp=new Array(s.length+1).fill(false);

    temp[0]=true;
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            if(temp[j] && set.has(s.substring(j,i))){
                temp[i]=true;
                break;
            }
        }
    }
    return temp[s.length];
};
console.log(wordBreak("bb",["a","b","bbb","bbbb"]));
