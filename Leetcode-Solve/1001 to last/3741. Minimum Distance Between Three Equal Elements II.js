/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    if(nums.length<3) return -1;
    let n=nums.length;
    let second=new Array(n+1).fill(-1);
    let third=new Array(n+1).fill(-1);
    let minNumber=Infinity;

    for(let i=0;i<n;i++){
        let number=nums[i];

        if(second[number]!==-1){
            let distance=(i-second[number])*2;
            if(distance<minNumber) minNumber=distance;

        }
        second[number]=third[number];
        third[number]=i;
    }
    return minNumber!==Infinity?minNumber:-1;
    
};

console.log(minimumDistance([1,2,1,1,3]));