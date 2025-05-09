/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arr1=new Array(224).fill(0)
    let arr2=new Array(224).fill(0)
    if(s.length!==t.length) return false
    for(let i=0;i<s.length;i++){
        let asci1=s[i].charCodeAt(0)
        let asci2=t[i].charCodeAt(0)
        arr1[asci1]?arr1[asci1]+=1:arr1[asci1]=1
        arr2[asci2]?arr2[asci2]+=1:arr2[asci2]=1
    }
    return JSON.stringify(arr1)===JSON.stringify(arr2)
    
};
console.log(isAnagram("cat","rct"))