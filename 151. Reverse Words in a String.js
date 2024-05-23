/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(s.length===1) return s;
    let first=-1,last=1,sclice=null;
    let array=[];
    for(let i=0;i<s.length;i++){
        if(s[i]===' ' || i===s.length-1){
            if(i===s.length-1 && s[i]!==' ') last=s.length;
            else last=i;
            if(first<last && (s[last-1]!==' ' && last-1>=0)){
                sclice=s.slice(first+1,last);
                //first+1 er ahge thake suru hoba r last er ahge sesh hobe
                //console.log(sclice);
                array.push(sclice);
            }
            first=last;
        }
    }
    array=array.reverse();
    //console.log(array.length);
    return array.join(" ");
    
};
console.log(reverseWords("t "));
