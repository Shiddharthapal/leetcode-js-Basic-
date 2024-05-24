/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let set=new Set(nums);
    let array=[...set];
    console.log(array);
    let low=0;
    let high=array.length-1;
    let mid=Math.ceil((high+low)/2);
    let min=array[mid];
    while(low<high){
        if(array[low]<array[mid]){
            if(array[mid]>array[high]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }else{
            high=mid-1;
        }
        mid=Math.ceil((low+high)/2);
        min=Math.min(min,array[mid]);
    }
    return min;
};
console.log(findMin([1,1]));
