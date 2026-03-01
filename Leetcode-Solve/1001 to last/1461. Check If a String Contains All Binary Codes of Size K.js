/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    if(s.length==0 && k==0) return false;
    let bit_index=[];
    let map=new Map();

    for(let i=0;i<=s.length-k;i++){
        let j=i;
        let temp=[];
        while(j<i+k){
            temp.push(s[j]);
            j++;
        }
        let sum=0;
        let x=0;
        for(let k=temp.length-1;k>=0;k--){
            sum=sum+(parseInt(temp[k])*Math.pow(2,x))
            x++;
        }
        map.set(sum,1);
        
    }
    let total_number=2**k;
    for(let number=0;number<total_number;number++){
        if(!map.has(number)) return false;
    }
    return true;
};

console.log(hasAllCodes("0110",1));