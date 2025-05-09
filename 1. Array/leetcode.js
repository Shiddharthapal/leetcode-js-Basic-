/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set=new Set(nums);
    let ans=1;
    if(nums.length===0) return 0;
    set.forEach((value)=>{
        if(!set.has(value-1)){
        let number=1;
        let newValue=value+1;
        while(set.has(newValue)){
            number++;
            newValue++;
        }
        ans>number?ans:ans=number;
    }
    })
     return ans;
}
console.log(longestConsecutive([1,2,3,4,5]))
