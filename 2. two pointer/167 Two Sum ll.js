/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first_p=0
    let last_p=numbers.length-1
    while(first_p<last_p){
        let e1=numbers[first_p]
        let e2=numbers[last_p]
        if((e1+e2)===target){
            return [(first_p+1),(last_p+1)]
            first_p++
            last_p--
        }else if(e1+e2 > target){
            last_p--
        }else if(e1+e2 < target){
            first_p++
        }
    }
    return a
};
console.log(twoSum([-2,0,1,0,1],0));