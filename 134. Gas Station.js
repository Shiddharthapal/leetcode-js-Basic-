var canCompleteCircuit = function(gas, cost) {
    let gasSum=0;
    for(let i=0;i<gas.length;i++){
        gasSum+=gas[i];
    }

    let costSum=0;
    for(let i=0;i<cost.length;i++){
        costSum+=cost[i];
    }

    if(costSum>gasSum) return -1;

    let sum=0,index=0;
    for(let i=0;i<gas.length;i++){
        sum+=(gas[i]-cost[i]);
        if(sum<0){
            sum=0;
            index=i+1;
        }
    }
    return index;
};
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))
