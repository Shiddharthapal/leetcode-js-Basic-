let printtree=(data,level=0)=>{
    if(data===null) return;
    console.log(data.val);//bfs
    printtree(data.left);// function return
    //let space='';
    //space='     '.repeat(level);
    /*for(let i=0;i<level;i++){
        space+='      ';
    }
    console.log(space+data.val);*/
    printtree(data.right);//function return
    //console.log(data.val);//dfp
}
let data={
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null,
        },
        right:{
            val:4,
            left:null,
            right:null,
        },
    },
    right:{
        val:5,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        },
    },
}
console.log(printtree(data));
let recursive=(value)=>{
    
    console.log(value);
    if(value===100) return;
    recursive(value+=1);
}
console.log(recursive(1));