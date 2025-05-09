/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map=new Map();
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');

    let array=[];
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])) array.push(s[i]);
        else{
            let len=array.length-1;
            if(array[len]===map.get(s[i]))  array.pop();
            else return false;
        }
    }
    if(array.length) return false; return true;
};
console.log(isValid("(]"));