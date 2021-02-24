const merge = (left, right) => {
    let arr = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}
const mergeSort = (arr) => {
    if(arr.length < 2){return arr;}
    let left = arr.splice(0, arr.length/2)
    return merge(mergeSort(left), mergeSort(arr))
}
console.log(mergeSort([1,4,2,3,6,5,8,7,9]));