var arraySum=function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
function combinationSum(candidates, target){
    let result=[];
    var backTracking=function(start,copyCandidates){
        let sum=arraySum(copyCandidates);
        if(sum===target){
            result.push([...copyCandidates]);
            return;//target full hoyle value assign koire labh nei,tai resurn korche
        }
        if(sum>target){
            return;//targer er boro hoyle value assign koire labh nei,tai return
        }
        
        for(let i=start;i<candidates.length;i++){
            copyCandidates.push(candidates[i]);//new value add
            backTracking(i,copyCandidates);
            /* i ta ,all possibility check korar jonno current/needed value ta ke
            hold koire rakhtasa*/
            copyCandidates.pop();//old value remove
        }
    }
    backTracking(0,[]);
    return result;
}

let candidates = [2,3,5];

let target = 8;

console.log(combinationSum(candidates, target)); //[[2,2,2,2],[2,3,3],[3,5]].
