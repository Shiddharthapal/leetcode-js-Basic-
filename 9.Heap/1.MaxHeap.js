class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(number){
        let arr=this.heap;
        arr.push(number);
        let child=arr.length-1;
        while(child>0){
            let parent=Math.floor((child-1) /2);
            //console.log(child);
            if(arr[child]>arr[parent]){
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
        if(arr[0]===null) return null;
        let root={
            val:arr[0],
            left:null,
            right:null,
        };
        let index=1;
        let queue=[root];
        while(arr.length>index){
            let node=queue.shift();
            if(arr[index]){
                node.left={
                    val:arr[index],
                    left:null,
                    right:null,
                };
                queue.push(node.left);
            }
            index++;
            if(arr[index]){
                node.right={
                    val:arr[index],
                    left:null,
                    right:null,
                };
                queue.push(node.right);
            }
            index++;
        }
        return root;
    }
    pop(){
        let arr=this.heap;
        if(arr.length<=1) return null;
        arr[0]=arr[arr.length-1];
        arr.pop();
        let i=0;
        while(1){
            let child=(i+1)*2;
            let child2=(i+1)*2+1;
            child-=1;
            child2-=1;
            if(arr[i]<arr[child] || arr[i]<arr[child2]){
                if((!arr[child2]) || arr[child]>arr[child2]){
                    let temp=arr[child];
                    arr[child]=arr[i];
                    arr[i]=temp;
                    i=child;
                }else{
                    let temp=arr[child2];
                    arr[child2]=arr[i];
                    arr[i]=temp;
                    i=child2;
                }
            }else{
                break;
            }
        }
        return arr;
    }
}
let heap = new MaxHeap();
heap.push(5);
heap.push(3);
heap.push(10);
heap.push(1);
heap.push(8);
heap.push(7);
heap.push(6);
console.log(heap.push(4));

console.log(heap.print());
heap.pop();
console.log(heap.pop());
console.log(heap.print());