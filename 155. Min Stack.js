/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack{
    constructor(){
        this.root=[];
    }

    push(number){
        this.root.push(number);
    }

    pop(){
        this.root.pop();
    }

    top(){
        let len=this.root.length;
        return this.root[len-1];
    }

    getMin(){
        let array=[...this.root];
        array=array.sort((a,b)=>a-b);
        return array[0];
    }
}

var obj=new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
var param_2=obj.getMin();
console.log(param_2);
obj.pop();
var param_3=obj.top();
console.log(param_3);
var param_4=obj.getMin();
console.log(param_4);
