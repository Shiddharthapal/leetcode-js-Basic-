/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    let row_quries=queries.length;
    for(let i=0;i<row_quries;i++){
        let li=queries[i][0];
        let ri=queries[i][1];
        let ki=queries[i][2];
        let vi=queries[i][3];
        let idx=li;
        while(idx<=ri){
            nums[idx]=(nums[idx]*vi)%(Math.pow(10,9) +7);
            idx+=ki;
        }
    }
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
        sum=sum^nums[i];
    }
    return sum;
    
};

console.log(xorAfterQueries([2,3,1,5,4], [[1,4,2,3],[0,2,1,2]]));