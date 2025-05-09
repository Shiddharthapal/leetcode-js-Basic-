/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len= strs.length;
    let map=new Map();
    for(let i=0;i<len;i++){
        for(let j=0;j<strs[i].length;j++){
            if(!map.has(strs[i][j])){
                map.set(strs[i][j],1);
            }else{
                map.set(map.get(strs[i][j])+1);
            }
        }
    }
    let result=[];
    for(let [key,val] of map){
        if(val===len) result.push(key);
    }
    return result;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));