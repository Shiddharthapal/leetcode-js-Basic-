/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let first=[1];
    let second=[1,1];
    let result=[];
    result.push(first);
    if(numRows===1) return result;
    result.push([...second]);
    if(numRows===2) return result;
    let count=3;
    while(numRows>= count){
        let temp=[];
        temp.push(1);
        for(let i=0;i<result[count-2].length-1;i++){
            let sum=result[count-2][i]+result[count-2][i+1];
            temp.push(sum);
        }
        temp.push(1);
        result.push([...temp]);
        count++;
    }
    return result;
};
console.log(generate(5));
