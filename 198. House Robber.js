/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let array=[];
    if(nums.length===0 || nums.length===1) return nums;
    array[0]=nums[0];
    array[1]=Math.max(array[0],nums[1]);
    if(nums.length===2) return array[1];
    for(let i=2;i<nums.length;i++){
        array[i]=Math.max((nums[i]+array[i-2]),array[i-1]);
    }
    return array[nums.length-1];
};
console.log(rob([2,1,1,2]));
