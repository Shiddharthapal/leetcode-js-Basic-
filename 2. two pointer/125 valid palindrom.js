/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l=s.length
    let first_i=0
    let last_i=l-1
    let flag=true
    if(s.length===0 || s.length===1) return flag
    while(first_i<last_i){
        let x=s[first_i]
        let y=s[last_i]
        if(x>='A' && x<='Z'){
            x=x.toLowerCase()
        }
        if(y>='A' && y<='Z'){
            y=y.toLowerCase()
        }
        while((x<'a'|| x>'z')&&(x<'0' || x>'9')){
            first_i++
            x=s[first_i]
            if(first_i===(s.length-1)) return true
            if(x>='A' && x<='Z'){
                x=x.toLowerCase()
            }
        }
        while((y<'a'|| y>'z')&&(y<'0' || y>'9')){
            last_i--
            y=s[last_i]
            if(y>='A' && y<='Z'){
                y=y.toLowerCase()
            }
        }
        if(x!==y){
            flag=false
        }
        first_i++
        last_i--
    }
    return flag
};
console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram."))