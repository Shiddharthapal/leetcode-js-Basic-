/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let digitArr=[];
    let splArr=[];
    let result=[];

    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z'){
            digitArr.push(s[i]);
        }else{
            splArr.push(s[i]);
        }
    }
    digitArr.reverse();
    splArr.reverse();

    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z'){
            let temp=digitArr.splice(0,1);
            result.push(temp[0]);
        }else{
            let temp=splArr.splice(0,1)
            result.push(temp[0]);
        }
    }
    return result.join("");
    
};
console.log(reverseByType("z"));