/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

let len = (a) => Object.keys(a).length;
var minWindow = function (s, t) {
    if(s.length==="")return s;
    let tObj={};
    let sObj={};
    for(let i=0;i<t.length;i++){
        sObj[t[i]]=0;
        if(!!tObj[t[i]]){
            tObj[t[i]]++;
        }else tObj[t[i]]=1;
    }
    let has=0;
    let need=Object.keys(tObj).length;
    let min=s.length;
    let tools={
        addString:(s)=>{
            if(!!sObj[s]){
                sObj[s]+=1;

            }else sObj[s]=1;
            if(sObj[s]===tObj[s]) has++;
        },
        removeString:(s)=>{
            if(!!tObj[s]){
                sObj[s]-=1;
                if(sObj[s]<tObj[s]){
                    has--;
                }
            }else has--;
        },
        canadd:(s)=>{
            return !!tObj[s];
        }

    }
    let result ="";
    let start=0;
    for(let end=0;end<s.length;end++){
        if(tools.canadd(s[end])){
            tools.addString(s[end]);
            while(need===has){
                if(min>=end-start+1){
                    min=end-start+1;
                    result=s.substring(start,end+1);
                }
                if(tools.canadd(s[start])){
                    tools.removeString(s[start]);
                    start++;
                }else start++;
            }
        }
    }
    return result;
};

console.log(minWindow("ADOBECODEBANC", (t = "ABC")));