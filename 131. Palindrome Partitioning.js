/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  var isPalindome=function(sub){
    let first=0;
    let last=sub.length-1;

    while(first<last){
      if(sub[first++]!==sub[last--]) return false;
    }
    return true;
  }
  var generate=function(start,result,temp){
    if(s.length===start){
      result.push([...temp]);
      return;
    }

    for(let i=start+1;i<=s.length;i++){

      let sub=s.substring(start,i);
      if(isPalindome(sub)){

        temp.push(sub);
        generate(i,result,temp);
        temp.pop();//backtracking

      }
    }
  }
  let result=[];
  generate(0,result,[]);
  return result;
};
console.log(partition("a"));
