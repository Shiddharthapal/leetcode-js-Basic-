/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length===1) return [[], nums];
    let result=[];
    let count=0;
    let temp=[];
    var backtracking=(i)=>{
        if(i>=nums.length && i>=count) return;
        temp.push(nums[i]);
        if(temp.length===count){
            result.push([...temp]);
            return;
        }
        for(let j=i+1;j<nums.length;j++){
            backtracking(j);
            temp.pop();
        }

    }

    for(let i=0;i<nums.length;i++){
        count=i+1;
        for(let i=0;i<nums.length;i++){
            backtracking(i);
            temp=[];
        }
    }

    result.push([...[]]);
    return result;

};

console.log(subsets([1,2,3,4,5]));