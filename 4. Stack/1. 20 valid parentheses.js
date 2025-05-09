
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map=new Map();
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');

    let array=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('||s[i]=='{'||s[i]=='['){
            array.push(s[i]);/* stack problem tai push hoyssa r latest
            value pop hoyssa and check detace je amar condition er sathe
            milca naki*/
        }else{
            let len=array.length-1;/* stack tai array er last index value 
            check korte hbe always r pop korte hbe array thake last
            value ta .rule(FIFO)*/
            if(map.get(s[i])===array[len]){
                array.pop();
            }else{
                return false;/*first a closing bracket ashle+
                ba openning bracket sara closing bracket ashle false 
                hoye jabe tai false return korche*/
            }
        }
    }
    if(array.length) return false;
    return true;
}
console.log(isValid("){}[]"));
/*var isValid = function(s) {
   let arr=[];
   let map=new Map();
   map.set(')','(');
   map.set('}','{');
   map.set(']','[');
   let y=0;
   for(let i=0;i<s.length;i++){
    if(s[i]==='('|| s[i]==='{'|| s[i]==='['){
        arr.push(s[i]);

    }else{
        let l =arr.length;
        if(i===0) return false;
            if(map.get(s[i])===s[l-1]){
                arr.pop();
            }
        
            else return false;
    }
   }
   if(arr.length===0) return true;
   else return false;
};
console.log(isValid("({{{{}}}))"));*/