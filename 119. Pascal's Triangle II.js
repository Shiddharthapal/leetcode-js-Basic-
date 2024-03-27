/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let first=[1];
    let second=[1,1];
    let result=[];
    result.push(first);
    result.push([...second]);
    let count=2;
    while(count<=rowIndex){
        let temp=[];
        temp.push(1);
        for(let i=0;i<result[count-1].length-1;i++){
            let sum=result[count-1][i]+result[count-1][i+1];
            temp.push(sum);
        }
        temp.push(1);
        result.push([...temp]);
        count++;
    }
    return result[rowIndex];
};
console.log(getRow(1));
