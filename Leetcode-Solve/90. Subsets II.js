/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// it beats runtime: 11.89% & memory beats: 66.83%
var subsetsWithDup = function(nums) {
    if(nums.length===0) return nums;
    let result=[];
    let count=0;
    let temp=[];
    let map=new Map();
    nums.sort((a,b)=>a-b);

    var backtracking=function(i){

        if(i>nums.length) return;

        temp.push(nums[i]);
        if(count===temp.length && !map.has(temp.toString())){
            result.push([...temp]);
            map.set(temp.toString(),1);
            return;
        }

        for(let j=i+1; j<nums.length;j++){
            backtracking(j);
            temp.pop();
        }
        
    }

    for(let tempCount=0;tempCount<nums.length;tempCount++){
        count=tempCount+1;

        for(let i=0;i<nums.length;i++){
            backtracking(i);
            temp.pop();
        }
    }

    result.push([...[]]);
    return result;
    
};

// it beats runtime: 22.18% & memory beats: 40.06%
var subsetsWithDup = function(nums) {
    let result=[];
    let n=nums.length;
    nums.sort((a,b)=>a-b);
       let map=new Map();

    //loop for o to 2^n
    for(let i=0;1<<n;i++){
        let temp=[];
        for(let j=0;i<n;j++){
            if((i>>j & 1)===1){
                temp.push(nums[j]);
            }
        }
        if(!map.has(temp.toString())){
            result.push([...temp]);
            map.set(temp.toString(),1);
        }
    }
    return result;

};

console.log(subsetsWithDup([4,4,4,1,4]));