/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],map.get(nums[i])+1);
            
        }
    }

    let number=0;
    for(let [key,val] of map.entries()){
        if(val===1) number= key;
    }
    return number;
};
console.log(singleNumber([1,2,1,2,3]))
