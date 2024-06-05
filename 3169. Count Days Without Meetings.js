/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>a[0]-b[0]);
    let firstValue=meetings[0][0];
    let lastValue=meetings[0][1];
    let ans=0;
    ans+=firstValue-1;
    let top=lastValue;

    for(let i=1;i<meetings.length;i++){
        firstValue=meetings[i][0];
        lastValue=meetings[i][1];

        if(firstValue>top){
            ans+=firstValue-top-1;
        }
        top=Math.max(top,lastValue);
    }
    return ans+=days-top;
};
console.log(countDays(5,[[2,4],[1,3]]));
