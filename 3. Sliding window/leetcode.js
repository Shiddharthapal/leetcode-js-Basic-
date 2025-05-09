/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map=new Map();
    let sum=0;
    for(let i=0;i<t;i++){
        if(map.has(t[i])) map.set(t[i],map.get(t[i])+1);
        else map.set(t[i],1);
        sum+=map.get(t[i]);
    }

    let left_p=0;
    let total=0;
    let result;
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            
        }
        while(total>=sum){
            result=s.slice(left_p,i+1);
            if(map.has(s[left_p])) map.set(s[left_p],map.get(s[left_p])-1);
            left_p++;
        }
    }
};
console.log(minWindow("ADOBECODEBANC","ABC"));