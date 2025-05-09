/**
 * @param {number[]} nums
 * @return {number}
 */
var search = function(nums,target) {
    let first=0;
    let last=nums.length-1;
    let mid=Math.ceil((first+last)/2);
    let index=-1;
    nums[mid]===target?index=mid:index;
    
    while(first<last){
        if(nums[first]<nums[mid]){
            if(nums[first]<=target && nums[mid]>=target)last=mid-1;
            else first=mid+1;
        }else{
            if(nums[mid]<=target && nums[last]>=target) first=mid+1;
            else last=mid-1;
        }
        mid=Math.ceil((first+last)/2);
        nums[mid]===target?index=mid:index;
    }
    return index;
};
console.log(search([4,5,6,7,0,1,2],0));