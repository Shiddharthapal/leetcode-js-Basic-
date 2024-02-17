//using two pointer
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum=0;
    let min_len=Number.MAX_SAFE_INTEGER;
    let first=0;
    let last=-1;
    while(last<=nums.length){//(last<num.length)
        if(sum>=target){
            sum-=nums[first];
            min_len=Math.min(min_len,(last-first)+1);
            first++;
        }else{
            last++;
            sum+=nums[last];
        }
        
    }
    if(min_len!==Number.MAX_SAFE_INTEGER)return min_len;
    else return 0;
};
