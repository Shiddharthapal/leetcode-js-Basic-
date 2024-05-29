/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length===1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[nums.length-1]>nums[nums.length-2]) return nums.length-1;

    let low=0;
    let high=nums.length-1;
    let mid=Number.parseInt((low+high)/2);

    while(low<high){
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]) return mid;

        if(nums[mid]<nums[mid+1]) low=mid+1;
        else high=mid;

        mid=Number.parseInt((low+high)/2);
    }
};

console.log(findPeakElement([3,4,3,2,1]));
