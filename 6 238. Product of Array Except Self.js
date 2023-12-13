/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let b_n=[];
    let a_n=[]
    let l=nums.length
    for(let i=0;i<l;i++){
        if(i===0) a_n[i]=nums[i]
        else a_n[i]=nums[i]*a_n[i-1]
    }
    for(let i=l-1;i>=0;i--){
        if(i==l-1) b_n[i]=nums[i]
        else b_n[i]=nums[i]*b_n[i+1]
    }
    let a=[]
    let x
    for(let i=0;i<l;i++){
        if(i===0) x=b_n[i+1]
        else if(i==l-1) x=a_n[i-1]
        else x=a_n[i-1]*b_n[i+1]
        a.push(x)
    }
    return a
};
console.log(productExceptSelf([-1,1,0,-3,3]))
