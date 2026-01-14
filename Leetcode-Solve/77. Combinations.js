/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n===1 && k===1) return [[1]];
    let result=[];
    let tempfornumber=[];
    for(let i=1;i<=n;i++){
        tempfornumber.push(i);
    }
    let temp=[];
    var backtracking=function(i){
    if(i>=n ) return;
    temp.push(tempfornumber[i]);
    if(temp.length===k) {
        result.push([...temp]);
        return;
    }
        for(let j=i+1;j<n;j++){
            backtracking(j);
            temp.pop();
        }   
    }
    for(let i=0;i<n;i++){
        backtracking(i)
        temp.pop();
    }
    return result;
};

console.log(combine(1, 1)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]