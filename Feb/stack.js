class Stack{
    constructor(){
        this.top = null;
    }
    add(val){
        let node = new Node(val);
        if(this.top === null){ 
            this.top = node;
        }
        else{
            node.next = this.top;
            this.top = node;
        }
    }
    pop(){
        this.top = this.top.next;
    }
    print(){
        let runner = this.top;
        while(runner != null){
            console.log(runner.value);
            runner = runner.next;
        }
    }
}
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
let s = new Stack();
s.add(4);
s.add(5);
s.add(3);
s.print();
console.log("______________");
s.pop();
s.print();
