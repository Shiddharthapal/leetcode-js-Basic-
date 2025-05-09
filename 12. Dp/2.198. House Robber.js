/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let temp=[];
    if(nums.length===0||nums.length===1) return nums;
    temp[0]=nums[0];
    temp[1]=Math.max(nums[0],nums[1]);
    if(nums.length===2) return temp[1];
    for(let i=2;i<nums.length;i++){
        temp[i]=Math.max(nums[i]+temp[i-2],temp[i-1])
    }
    return temp[nums.length-1];
}
console.log(rob([2,7,9,3,1]));