/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n=nums.length;
    let map= new Map();
    let i=0;
    while(i<n){
        if(map.has(nums[i])){
            
            if(map.get(nums[i])>=2){
                let temp=nums[i];
                let j=i;
                let count=0;
                while(j<n){
                    if(nums[j]===temp) count++;
                    else break;
                    j++;
                }
                nums.splice(i,count);
                if(j===n) break;
                continue;
            }else{
                map.set(nums[i], map.get(nums[i])+1);
            }

        }else{
            map.set(nums[i],1);
        }
       i++;
    }
    const afterRemoveLength=nums.length;
    // for(let i=0;i<(n-afterRemoveLength);i++){
    //     nums.push("_");
    // }
    return afterRemoveLength;
};

console.log(removeDuplicates([1,1,1,2,2,3]))