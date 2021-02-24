class Node {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}
class BST {
    constructor(){
        this.head = null;
    }
    insert(val) {
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
        }
        else {
            let runner = this.head;
            let placed = false;
            while(!placed){
                if(val > runner.value){
                    if(runner.right === null){
                        runner.right = node;
                        placed = true;
                    }
                    else{
                        runner = runner.right;
                    }
                } 
                else {
                    if(runner.left === null){
                        runner.left = node;
                        placed = true;
                    }
                    else {
                        runner = runner.left;
                    }
                }
            }
        }
    }
    printTree(node=this.head) {
        if(node === null) {
            return;
        } 
        this.printTree(node.left);
        console.log(node.value);
        this.printTree(node.right);
    }
    findMin(node=this.head) {
        let runner = node;
        while(runner.left !== null){
            runner = runner.left;
        }
        console.log(runner.value);
        return runner.value;
    }
    findMax(node=this.head){
        let runner = node;
        while(runner.right != null){
            runner = runner.right;
        }
        console.log(runner.value);
        return runner.value;
    }
    valToNode(num){
        let runner = this.head;
        while(runner != null){
            if(num > runner.value){
                runner = runner.right;
            }
            else if(num < runner.value){
                runner = runner.left;
            }
            else {
                return runner;
            }
        }
        return -1;
    }
    printTreeDesc(node=this.head) {
        if(node === null){return;}
        this.printTreeDesc(node.right);
        console.log(node.value);
        this.printTreeDesc(node.left);
    }
    toArrayAsc(node=this.head, retArr=[]) {
        if(node === null) {
            return;
        } 
        this.toArrayAsc(node.left, retArr);
        retArr.push(node.value);
        this.toArrayAsc(node.right, retArr);
        return retArr;
    }
    toArrayDesc(node=this.head, retArr=[]){
        if(node == null){
            return;
        }
        this.toArrayDesc(node.right, retArr);
        retArr.push(node.value);
        this.toArrayDesc(node.left, retArr);
        return retArr;
    }
    toObjAsc(node=this.head, retObjArr=[]) {
        if(node == null){
            return;
        }
        this.toObjAsc(node.right, retObjArr);
        retObjArr.push(node);
        this.toObjAsc(node.left, retObjArr);
        return retObjArr;
    }
    findHeight(node=this.head, countArr=[], count=0){
        count++;
        if(node === null) {
            return;
        } 
        else if(node.right == null && node.left == null){
            countArr.push(count);
            count = 0;
        }
        else{
            this.findHeight(node.left, countArr, count);
            this.findHeight(node.right, countArr, count);
        }
        let max = countArr[0];
        for(let i=1;i<countArr.length;i++){
            max < countArr[i] ? max = countArr[i] : '';
        }
        return max;
    }
    delete(val, node=this.head){
        if(node == null){
            return;
        }
        else if(node.right != null && node.right.value === val){
            node.right = null;
            return;
        }
        else if(node.left != null && node.left.value === val){
            node.left = null;
            return;
        }
        
        else {
            this.delete(val, node.left);
            this.delete(val, node.right);
        }
    }
    minHeight(node=this.head, countArr=[], count=0){
        count++;
        if(node === null) {
            return;
        } 
        else if(node.right == null && node.left == null){
            countArr.push(count);
            count = 0;
        }
        else{
            this.minHeight(node.left, countArr, count);
            this.minHeight(node.right, countArr, count);
        }
        let min = countArr[0];
        for(let i=1;i<countArr.length;i++){
            min > countArr[i] ? min = countArr[i] : '';
        }
        return min;
    }
    maxPathSum(node=this.head, countArr=[], count=0){
        
        if(node === null) {
            return;
        } 
        else if(node.right == null && node.left == null){
            count+=node.value;
            countArr.push(count);
            count = 0;
        }
        else{
            count+=node.value;
            this.maxPathSum(node.left, countArr, count);
            this.maxPathSum(node.right, countArr, count);
        }
        let max = countArr[0];
        for(let i=1;i<countArr.length;i++){
            countArr[i] > max ? max = countArr[i] : '';
        }
        console.log(countArr);
        return max;
    }
}
function arrToBST(arr) {
    let retBST = new BST();
    for(let i=0;i<arr.length;i++){
        retBST.insert(arr[i]);
    }
    return retBST;
}

let bt = new BST();
bt.insert(1);
bt.insert(5);
bt.insert(3);
bt.insert(2);
bt.insert(4);
bt.insert(-1);
bt.insert(-3);
bt.insert(8);
bt.insert(32);
bt.insert(11);
bt.insert(-12);
// bt.printTree();
// console.log("___________");
// bt.findMin();
// bt.findMax();
// console.log(bt.valToNode(-12));
// console.log(bt.valToNode(8));
// console.log(bt.valToNode(32));
// console.log(bt.valToNode(88));
// bt.printTreeDesc();
// console.log(bt.toArrayAsc());
// console.log(bt.toArrayDesc());

let newBT = arrToBST([1,4,2,3,8,7,6,5,9,8,0]);
//                 1
//              0    4
//                 2   8
//                  3 7 9
//                   6 8
//                  5
//                  
// 
// 
// 
// 

// newBT.printTree();

// console.log(newBT.toObjAsc());
// console.log(newBT.findHeight());
// newBT.printTree();
// newBT.delete(7);
// console.log("__________________");
// newBT.printTree();
console.log(newBT.minHeight());
console.log(newBT.maxPathSum());