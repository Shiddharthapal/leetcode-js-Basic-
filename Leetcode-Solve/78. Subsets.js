/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     if(nums.length===1) return [[], nums];
//     let result=[];
//     let count=0;
//     let temp=[];
//     var backtracking=(i)=>{
//         if(i>=nums.length && i>=count) return;
//         temp.push(nums[i]);
//         if(temp.length===count){
//             result.push([...temp]);
//             return;
//         }
//         for(let j=i+1;j<nums.length;j++){
//             backtracking(j);
//             temp.pop();
//         }

//     }

//     for(let i=0;i<nums.length;i++){
//         count=i+1;
//         for(let i=0;i<nums.length;i++){
//             backtracking(i);
//             temp=[];
//         }
//     }

//     result.push([...[]]);
//     return result;

// };
var subsets = function(nums) {
    let result=[];
    let n=nums.length;

    //loop for o to 2^n
    for(let i=0;i< (1<<n);i++){
        const temp=[];

        for(let j=0;j<n;j++){

            //if the j'th bit is set, add nums[j]
            if(((i>>j) & 1)===1){
                temp.push(nums[j]);
            }
        }

        result.push(temp);
    }
    return result;

};


console.log(subsets([1,2,3]));