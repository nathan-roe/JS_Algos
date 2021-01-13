function bubbleSort(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] > arr[i + 1])
        {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            count += 1;
        }
    }
    if(count > 0){return bubbleSort(arr);} 
    else{return arr;};
}
// console.log(bubbleSort([3,2,4,1,5,6,7,8,9]));
function selectionSort(arr){
    let min, idx;
    for(let i=0;i<arr.length;i++)
    {
        min = arr[i];
        idx = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j] < min)
            {
                min = arr[j];
                idx = j;
            }
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return arr;
}
// console.log(selectionSort([3,4,5,6,2,1,7,8,9,0]));
function insertionSort(arr){

    for(let i=1;i<arr.length;i++)
    {
        for(let j=i-1;j>=0;j--)
        {

            if(arr[j+1] < arr[j])
            {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    return arr;
}
// console.log(insertionSort([2,3,1,6,5,7,8,9,4,0]));
function merge(arr1, arr2){
    for(let i=0;i<arr1.length && i<arr2.length;i++)
    {
        if(arr1[i] > arr2[i])
        {
            [arr1[i], arr2[i]] = [arr1[i], arr2[i]]
        }
    }
}
function mergeSort(arr){
    let finalArr = [];
    let arr1 = arr.slice(0, Math.floor(arr.length/2)); 
    let arr2 = arr.slice(Math.floor(arr.length/2), arr.length); 
    
}
console.log(mergeSort([3,4,2,6,1,5,7,8,0,9,2]));