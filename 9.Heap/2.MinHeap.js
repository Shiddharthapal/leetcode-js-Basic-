class MinHeap{
    constructor(){
        this.heap=[];
    }
    push(num){
        let arr=this.heap;
        arr.push(num);
        let child=arr.length-1;
        while(child>0){
            let parent=Math.floor((child-1)/2);
            if(arr[child]<arr[parent]){
                let temp=arr[child];
                arr[child]=arr[parent];
                arr[parent]=temp;
                child=parent;
            }else{
                break;
            }
            
        }
        return arr;
    }
    print(){
        let arr=this.heap;
        let root={
            val:arr[0],
            left:null,
            right:null,
        }
        let index=1;
        let queue=[root];
        while(arr.length>index){
            let node=queue.shift();
            if(arr[index]){
                node.left={
                    val:arr[index],
                    left:null,
                    right:null,
                }
                queue.push(node.left);
            }
            index++;
            if(arr[index]){
                node.right={
                    val:arr[index],
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
//heap.pop();
//console.log(heap.pop());
//console.log(heap.print());