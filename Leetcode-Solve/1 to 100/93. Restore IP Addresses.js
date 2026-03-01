/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result=[];
    let len=s.length;
    let temp=[];

    //check the slice string that maintain all condition
    var isValid=function(tempStr){
        if(tempStr.length>3 || (tempStr.length>1 && tempStr[0]==='0')){
            return false;
        }
        
        if(parseInt(tempStr)>255) return false;
        return true;
    }
    
    //backtracking function
    var backtracking = function(i){
        if(temp.length>4){
            return;
        }

        //when string length is meet to actual string length with 3>= size block
        if(temp.length===4 && i===len){
            let string="";
            for(let i=0;i<temp.length;i++){
                string+=temp[i];
                if(i!==temp.length-1) string+=".";
            }
            if(string.length===len+3) result.push(string);
            return;
        }

        //call validation function and put the string to a array and call the backtacking function
        for(let j=i;j<len;j++){
            let tempSlice= s.substring(i,j+1)
            if(isValid(tempSlice)){

                 temp.push(tempSlice);
                backtracking(j+1);
                temp.pop();
            }   
        }
    }

    //call the back tracking function
    for(let i=0;i<len;i++){
        backtracking(i);
    }

    return result;
   
};

console.log(restoreIpAddresses("101023"))


