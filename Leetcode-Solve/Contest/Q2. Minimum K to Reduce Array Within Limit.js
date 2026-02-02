/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumK = function(nums) {
    let low=1;
    let high=Math.max(...nums);

    let tempArray=nums;

    var calculateNonPositive=function(mid){
        let sum=0;
        for(const val of tempArray){
            sum=sum+Math.ceil(val/mid)
        }
        return sum;
    }

    while(low===high){
    let mid=Math.floor((low+high)/2);
    if(calculateNonPositive(mid)<=mid*mid) return high=mid;
    else return low=mid+1;
    }
    while(low<high){
    let mid=Math.floor((low+high)/2);
    if(calculateNonPositive(mid)<=mid*mid) high=mid;
    else low=mid+1;
    }
    return low;
    
};

console.log(minimumK([3,7,5]));