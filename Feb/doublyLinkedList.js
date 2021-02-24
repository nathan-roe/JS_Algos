class Node {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}
class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insert(val){
        let node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            return;
        }
        let runner = this.head;
        while(runner.right != null){
            runner = runner.right;
        }
        node.left = runner;
        runner.right = node;
        this.tail = node;
        return;
    }
    printAsc(){
        let runner = this.head;
        while(runner != null){
            console.log(runner.value);
            runner = runner.right;
        }
    }
    printDesc(){
        let runner = this.tail;
        while(runner != null){
            console.log(runner.value);
            runner = runner.left;
        }
    }
    reverse(){
        let dll = new DLL();
        let runner = this.tail;
        while(runner != null){
            dll.insert(runner.value);
            runner = runner.left;
        }
        this.head = dll.head;
        this.tail = dll.tail;
    }
    toArray(){
        let arr = [];
        let runner = this.head;
        while(runner != null){
            arr.push(runner.value);
            runner = runner.right;
        }
        return arr;
    }
    sortAsc(){
        let dll = new DLL();
        let arr = this.toArray();
        let boolVal = false;
        while(!boolVal){
            boolVal = true;
            for(let i=0;i<arr.length-1;i++){
                if(arr[i+1] < arr[i]){
                    [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
                    boolVal = false;
                }    
            }
        }
        for(let i=0;i<arr.length;i++){
            dll.insert(arr[i]);
        }
        this.head = dll.head;
        this.tail = dll.tail;
    }
    sortDesc(){
        let dll = this;
        dll.sortAsc();
        dll.reverse();
    }
    insertArr(arr){
        for(let i=0;i<arr.length;i++){
            this.insert(arr[i]);
        }
    }
    first(num){
        let runner = this.head;
        while(runner != null){
            if(runner.value === num){
                return runner;
            }
        }
        return;
    }
    all(num){
        let arr = [];
        let runner = this.head;
        while(runner != null){
            if(runner.value = num){
                arr.push(runner);
            }
        }
        return arr;
    }
    allFromArr(arr){
        let retArr = [];
        let runner = this.head;
        while(runner != null){
            if(arr.includes(runner.value) && !retArr.includes(runner.value)){
                retArr.push(runner);
            }
        }
        return retArr;
    }
    swapNodes(num1, num2){
        let node1, node2;
        if(num1 === num2){
            return;
        }
        let runner = this.head;
        while(runner != null){
            if(runner.value === num1){
                node1 = runner;
            } 
            else if (runner.value === num2){
                node2 = runner;
            }
            runner = runner.right;
        }
        if(node1 != null && node2 != null){
            let temp = node1.value;
            node1.value = node2.value;
            node2.value = temp;
        }
        return;
    }
}
let dll = new DLL();
dll.insert(5);
dll.insert(2);
dll.insert(4);
dll.insert(6);
dll.printAsc();
// dll.printDesc();
// dll.reverse();
// dll.printAsc();
// dll.printDesc();
// console.log("_____________________");
// dll.sortAsc();
// dll.printAsc();
// console.log("_____________________");
// dll.sortDesc();
// dll.printAsc();
// dll.insertArr([1,5,4,3,2,7,6,5,8,7,9,8,7,6,5,6,4,3]);
// dll.printAsc();
console.log("_____________________");
// dll.sortAsc();
// dll.printAsc();
dll.swapNodes(5, 4);
dll.printAsc();
console.log("_____________________");
dll.swapNodes(6, 2);
dll.printAsc();
