/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length===1) return Number.parseInt(tokens[0]);
    let array=[];
    let sum=0;
    for(let i=0;i<tokens.length;i++){
        let length=array.length;
        if(tokens[i]==='+'){
            if(length<2) return null;
            sum=(array[length-2]+array[length-1]);
            array.pop();
            array.pop();
            array.push(sum);
        }
        else if(tokens[i]==='-'){
            if(length<2) return null;
            sum=(array[length-2]-array[length-1]);
            array.pop();
            array.pop();
            array.push(sum);
        }
        else if(tokens[i]==='*'){
            if(length<2) return null;
            sum=(array[length-2]*array[length-1]);
            array.pop();
            array.pop();
            array.push(sum);
        }
        else if(tokens[i]==='/'){
            if(length<2) return null;
            if(!array[length-1]) return null;
            sum=Number.parseInt(array[length-2]/array[length-1]);
            array.pop();
            array.pop();
            array.push(sum);   
        }
        else{
            array.push(Number.parseInt(tokens[i]));
        }
    }
    return Number.parseInt(array[0]);
};
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
