var connect = function(root) {
    if(!root) return root;
    let queue=[root];
    let temp=[];
    while(queue.length){
        let node=queue.shift();
        if(node.left) temp.push(node.left);
        if(node.right) temp.push(node.right);

        if(queue.length===0){
            node.next=null;
            queue=temp;
            temp=[];
        }else{
            node.next=queue[0];
        }
    }
    return root;
};
