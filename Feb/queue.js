class Queue{
    constructor(){
        this.back = null;
        this.front = null;
    }
    enqueue(val){
        let node = new Node(val);
        if(this.back === null){
            this.back = node;
            this.front = node;
        }
        else{
            if(this.front.back === undefined){
                this.front.back = node;
            }
            this.back.behind = node;
            node.ahead = this.back;
            this.back = node;
        }
    }
    dequeue(){
        if(this.front.back != null){
            let back = this.front.back;
            console.log(back.value);
            this.front = back;
            console.log(this.front.value);
        }
        else{
            this.front = null;
            this.back = null;
        }
        
// [1 -> 3 -> 2 -> 4]
    }
    printFromFront(){
        let runner = this.front;
        while(runner != null){
            console.log(runner.value);
            runner = runner.behind;
        }
    }
    printFromBack(){
        let runner = this.back;
        while(runner != null){
            console.log(runner.value);
            runner = runner.ahead;
        }
    }
    sortQ(){
        let arr = [];
        let runner = this.front;
        let qLength = 0;
        while(runner !== null){
            arr.push(runner.value);
            qLength++;
            runner = runner.behind;
        }
        console.log(arr);
        let boolVal = false;
        while(!boolVal){
            boolVal = true;
            for(let i=0;i<arr.length;i++){
                if(arr[i] > arr[i+1]){
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    boolVal = false;
                }
            }
        }
        console.log(arr);
        this.wipe();
        for(let i=0;i<arr.length;i++){
            this.enqueue(arr[i]);
        }
    }
    wipe(){
        this.front = null;
        this.back = null;
    }
}
class Node{
    constructor(val){
        this.value = val;
        this.ahead = null;
        this.behind = null;
    }
}
let q = new Queue();
q.enqueue(1);
q.enqueue(5);
q.enqueue(2);
q.enqueue(4);
q.enqueue(3);
// q.printFromBack();
// console.log("_____________");
q.printFromFront();
q.dequeue();
console.log("_____________");
q.printFromFront();
// console.log("_____________");
// q.sortQ();
// q.printFromFront();
// console.log(q.front.back);