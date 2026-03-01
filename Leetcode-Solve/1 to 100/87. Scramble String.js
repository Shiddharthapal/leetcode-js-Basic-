/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let map=new Map();
    if(s1.length!==s2.length) return false;

    var checkScramble=function(s1,s2){
        let n=s1.length;
        if(s1===s2) return true;

        let scramble_key=s1+" "+s2;

        //check scramble_key is in map then return the key value 
        if(map.has(scramble_key)){
            return map.get(scramble_key);
        }

        for(let i=1;i<n;i++){

            //check both partition if those are same or not. if same then return the key value and check both same portion of
            // different  string
            if(checkScramble(s1.substr(0,i), s2.substr(0,i)) && checkScramble(s1.substr(i),s2.substr(i))){
                 map.set(scramble_key,true);
                 return map.get(scramble_key);
            }

            // here i am checking frist string(1'st portion, 2nd portion) and second string(2'nd portion, 1'st portion)
            if(checkScramble(s1.substr(0,i),s2.substr(n-i)) && checkScramble(s1.substr(i),s2.substr(0,n-i))){
                 map.set(scramble_key,true);
                 return map.get(scramble_key);
            }
        }

        // here all posibility is incrorrect  then return false.
         map.set(scramble_key,false);
         return map.get(scramble_key);


    }
    return checkScramble(s1,s2);
};

console.log(isScramble("a","a"))