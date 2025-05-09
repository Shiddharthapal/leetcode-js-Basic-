/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map=new Map();
    let tostring=(char)=>{
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else map.set(char,1);
        let max1=0;
        for(let[key,value] of map){
            if(value>max1) max1=value;
        }
        return max1;
    }
    let left_p=0;
    let result=0;
    for(let i=0;i<s.length;i++){
        let max=tostring(s[i]);
        while(i-left_p+1-max>k){
            map.set(s[left_p],map.get(s[left_p])-1);
            left_p++;
        }
        result=Math.max(result,i-left_p+1);
    }
    return result;

};
console.log(characterReplacement("ABAB",2));