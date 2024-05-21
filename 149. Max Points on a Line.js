/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {

    var areSame=function([x1,y1],[x2,y2],[x3,y3]){
        if(x1===x2 && x2===x3 ||
            y1===y2 && y2===y3) return true; /* ai khan a ami check korche je all x(horizontal) axes gula
             same kina !! jodi same hoi tahole horizontal straight line thakbe . Same vabe vartical axes er
             jonno y o check korte hbe .. */


      /* ai kan a check korche je 2 ta point same hoyssa kina!! same hoyle "false" hbe cz 3 ta point er 2
       ta jodi same hoi taile tho straight line hoba nah*/
        if(x1===x2 ||
            x2===x3 || 
            y1===y2 ||
            y2===y3) return false;
      
        /* horizontal,vartical axes sara o tho staight line thakte pare . jodi straight line thake
        tahole tar dhal same hobe . tai dhal ber koire check korche je 3 ta point er jonno 2(dhal1=(y1-y2)/(x1-x2) ,
        dhal2=(y2-y3)/(x2-x3)) ta dhal same ki na!!!. same hoyle 3 ta point straight line a thakbe. 
        r same nah hoyle false */
        let dhal1=(y1-y2)/(x1-x2);
        let dhal2=(y2-y3)/(x2-x3);
        return dhal1===dhal2;
    }
    let max=1;
    for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
            let count=2;
            for(let k=j+1;k<points.length;k++){
                if(areSame(points[i],points[j],points[k])) count++;
            }
            max=Math.max(max,count);
        }
    }
    return max;

};

console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
