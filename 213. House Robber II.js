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
    for(let i=2;i<nums.length-1;i++){
        array[i]=Math.max((nums[i]+array[i-2]),array[i-1]);
    }
    let sum=array[nums.length-2];
    array[1]=nums[1];
    array[2]=Math.max(nums[2],array[1]);
    for(let i=3;i<nums.length;i++){
        array[i]=Math.max((nums[i]+array[i-2]),array[i-1]);
    }
    let sum2=array[nums.length-1];
    return Math.max(sum,sum2);
};
console.log(rob([1,2,1,1]));
