/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let target=0;
    let result=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        let first_p=i+1;
        let last_p=nums.length-1;
        if(nums[i]===nums[i-1]) continue;
        while(first_p<last_p){
            if(nums[last_p]===nums[last_p+1]){
                if(last_p!==nums.length-1)continue;
            }

            let e1=nums[i];
            let e2=nums[first_p];
            let e3=nums[last_p];

            if((e1+e2+e3)===target){
                result.push([e1,e2,e3]);
                first_p++;
                last_p--;
            }else if((e1+e2+e3)>target){
                last_p--;
            }else if((e1+e2+e3)<target){
                first_p++;
            }
        }
    }
    return result;
};
console.log(threeSum([0,0,0]));