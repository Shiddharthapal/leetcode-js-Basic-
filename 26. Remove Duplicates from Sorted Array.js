/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //if(nums.length===1) return nums;
    let j=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]) {
        nums[j++]=nums[i];
        }
    }
    return j;
};
console.log(removeDuplicates([1]));
