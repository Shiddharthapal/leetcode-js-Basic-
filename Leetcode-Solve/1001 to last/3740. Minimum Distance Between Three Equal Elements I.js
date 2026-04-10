/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    if(nums.length<3) return -1;
    let tempArray=[];
    for(let i=0;i<nums.length;i++){
        tempArray.push([nums[i],i]);
    }
    tempArray.sort((a,b)=>a[0]-b[0]);
    let flag=true;
    let index=0;
    let result=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<tempArray.length-2;i++){
        for(let j=i+1;j<tempArray.length-1;j++){
            for(let k=j+1;k<tempArray.length;k++){
                if(tempArray[i][0]===tempArray[j][0] && tempArray[j][0]===tempArray[k][0]){
                    result=Math.min(result, Math.abs(tempArray[i][1]-tempArray[j][1])+Math.abs(tempArray[j][1]-tempArray[k][1])+Math.abs(tempArray[k][1]-tempArray[i][1]));
                }else{
                    flag=false;
                    index=k;
                    break;
                }
            }
            if(flag===false) break;
        }
        flag=true;
        
    }
    return result===Number.MAX_SAFE_INTEGER?-1:result;
    
};
console.log(minimumDistance([1,2,1,1,3]));