/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result=[];
    let len=s.length;
    let block_size=Math.ceil(len/4);
    console.log("block_size ==> ", block_size);


    //here i am using cascade of clock algorithm 
    let first_b,second_b,third_b,fourth_b=block_size;
    setInterval(()=>{
        if(fourth_b===0){
            fourth_b=block_size;
            third_b--;
        }
        if(third_b===0){
            third_b=block_size;
            fourth_b=block_size;
            second_b--;
        }

        if(second_b===0){
            second_b=block_size;
            third_b=block_size;
            fourth_b=block_size;
            first_b--;
        }
        if(first_b===0){
            return;
        }

        let blocks = [
            s.slice(0, first_b),
            s.slice(first_b, second_b),
            s.slice(second_b, third_b),
            s.slice(third_b, fourth_b)
        ];

    },1)
   
};

console.log(restoreIpAddresses("25525511135"))


