const recursiveBubbleSort = (arr, bool=true) => {
    bool = true;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] > arr[i + 1])
        {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            bool = false;
        }
    }
    return bool === true ? arr : recursiveBubbleSort(arr, bool);
} 
console.log(recursiveBubbleSort([4,3,2,5,4,6,54,7,6,8,7,9,8,0,9,8,7,6,5,6,7,6,5,4,3,4,5,4,3,2,1,3,2,5,4,6,5]));