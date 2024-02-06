/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let target=0
    nums.sort((a,b)=> a-b)
    let a=[]
    for(let i=0;i<(nums.length)-2;i++){
        let first_e=i+1
        let last_e=nums.length -1
        if(nums[i]===nums[i-1]) continue
        while(first_e<last_e){
            let e1=nums[i]
            let e2=nums[first_e]
            let e3=nums[last_e]
            if((nums[last_e]===nums[last_e+1])) {
                if(last_e!==nums.length-1){
                    last_e--
                    continue
                }
            }
            if(e1+e2+e3 === 0){
                a.push([e1,e2,e3])
                first_e++
                last_e--
            }else if(e1+e2+e3 > 0){
                last_e--
            }else if(e1+e2+e3 < 0){
                first_e++
            }
        }
    }
    return a
};
console.log(threeSum([0,0,0]))
