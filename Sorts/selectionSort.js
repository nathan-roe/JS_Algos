// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
const selectionSort = (arr) => {
    for(let i=0;i<arr.length;i++)
    {
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            arr[j] < arr[min] ? min = j : '';
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    console.log(arr);
}

selectionSort([6,5,7,4,3,4,3,2,1,9,8,7,8,9,5,6,45,3,4,5,67,8,8,0,9,8,7]);