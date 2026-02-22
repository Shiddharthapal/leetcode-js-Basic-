/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let prev_bit=null;
    let number=n;
    while(number){
        //calculate the bit using module operation
        let bit=number%2;
        number=parseInt(number/2);
        //check  two adjacent bits will always have same/different values
        if(bit===prev_bit) return false;
        prev_bit=bit;
    }
    return true;
};

console.log(hasAlternatingBits(11))