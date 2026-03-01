/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let high=nums.length-1;
    let low=0;
    let mid=Math.ceil((high+low)/2);
    let parmaMid=mid;
    let parmaHigh=high;
    let parmaLow=low;
    if(nums[mid]===target) return true;
    let flag=false;

    //use recursive  approach here
    var binarySearch=(low,high)=>{
        if(low>high) return;
         mid=Math.ceil((low+high)/2);
        if(nums[mid]===target){
            flag=true;
            return;
        }
        binarySearch(low, mid-1);
        binarySearch(mid+1, high);
    }

    //here i am using binar search
    while(low<=high){
        if(nums[low]<=nums[mid]){
            if(nums[low]<=target && nums[mid]>=target){
                high=mid-1;
                
            }else{
                low=mid+1;
            }

        }else{
            if(nums[mid]<=target && nums[high]>=target){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
        mid=Math.ceil((low+high)/2);
        if(nums[mid]===target) return true;

    }
    if(low>=high && nums[parmaMid]===nums[parmaHigh]){
        binarySearch(parmaLow, parmaHigh);
    }
    return flag;
};

console.log(search([1,0,1,1,1],0));