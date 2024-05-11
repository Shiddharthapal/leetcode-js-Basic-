/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict,map=new Map()) {
    if(map.has(s)) return map.get(s);

    let result=[];
    for(let word of wordDict){
        if(s.startsWith(word)){
            let leftBreak=s.slice(word.length);
            if(!leftBreak.length)  result.push(word);
            else wordBreak(leftBreak,wordDict,map).forEach((val)=>
            result.push(word+' '+val));
        }
    }
    map.set(s,result);
    return result;
    
};
console.log(wordBreak("catsanddog",["cat","cats","and","sand","dog"]));
