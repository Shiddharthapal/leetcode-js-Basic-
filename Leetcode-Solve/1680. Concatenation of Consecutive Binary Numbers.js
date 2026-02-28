/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let str="";
    let count=1;
    while(count<=n){
        let tempstr=count.toString(2);

        str+=tempstr;
        count++;
    }

    let digit=BigInt("0b"+str);
    let limit=10n ** 9n + 7n;
    if(digit>(limit)){
        digit=digit%limit;
    }
    return Number(digit);
    
};

console.log(concatenatedBinary(3));