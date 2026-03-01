/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let twoN=1;
    //calculated the factorial 
    for(let i=2*n;i>0;i--){
        twoN*=i;
    }

    let oneN=1;
    for(let i=n;i>0;i--){
        oneN*=i;
    }

    //here i am using floor when calculate (2n n) it make the number like (4.6->4)
    //when i divide the  recursive definition mathematically equivalent by (n+1) then i use ceil that make the number like (4.2->5)
    return Math.ceil(Math.floor(twoN/(oneN*oneN))/(n+1));

};

console.log(numTrees(18));
