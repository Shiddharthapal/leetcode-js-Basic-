class MinHeap{
    constructor(){
        this.heap=[];
    }
    push(x){
        let array=this.heap;
        array.push(x);
        let child=array.length-1;
        while(child>0){
            let parent=Math.floor((child-1)/2);
            if(array[parent]>array[child]){
                let temp=array[child];
                array[child]=array[parent];
                array[parent]=temp;
                child=parent;
            }else{
                break;
            }
        }
        return array;
    }
    pop(){
        let array=this.heap;
        array[0]=array[array.length-1];
        array.pop();
        let i=0;
        while(1){
            let child1=(i+1)*2;
            let child2=(i+1)*2+1;
            child1-=1;
            child2-=1;
            if(array[i]>array[child1] || array[i]>array[child2]){
                if(array[child1]<array[child2] || !array[child2]){
                    let temp=array[child1];
                    array[child1]=array[i];
                    array[i]=temp;
                    i=child1;
                }else{
                    let temp=array[child2];
                    array[child2]=array[i];
                    array[i]=temp;
                    i=child2;
                }
            }else{
                break;
            }
        }
        return array;
    }
    print(){
        let array=this.heap;
        let root={
            val:array[0],
            left:null,
            right:null,
        }
        let index=1;
        let queue=[root];
        while(index<array.length){
            let node=queue.shift();
            if(array[index]){
                node.left={
                    val:array[index],
                    left:null,
                    right:null,
                }
                queue.push(node.left);
            }
            index++;
            if(array[index]){
                node.right={
                    val:array[index],
                    left:null,
                    right:null,
                }
                queue.push(node.right);
            }
            index++;
        }
        return root;
    }
}
let heap=new MinHeap();
heap.push(5);
heap.push(3);
heap.push(10);
heap.push(1);
heap.push(8);
heap.push(7);
heap.push(6);
console.log(heap.push(4));

console.log(heap.print());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.print());