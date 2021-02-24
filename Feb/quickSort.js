const partition = (arr, low, high) => {
    pivot = arr[high];  
    i = (low - 1);
    for (let j=low;j<high;j++){
        if (arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return (i + 1);
}
const quickSort = (arr, low, high) => {
    if (low < high){
        pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1); 
        quickSort(arr, pivotIndex + 1, high); 
    }
}
let arr = [10, 7, 8, 9, 1, 5];
console.log(arr);
let n = arr.length;
quickSort(arr,0,n-1) 
console.log(arr);