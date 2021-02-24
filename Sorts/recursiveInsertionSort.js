// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

const recursiveInsertionSort = (arr, n=0) => {
    if(arr[n + 1] < arr[n])
    {
        let j = n + 1;
        while(arr[j] < arr[j - 1])
        {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return n == arr.length - 2 ? arr : recursiveInsertionSort(arr, n + 1); 
}
console.log(recursiveInsertionSort([5,4,3,2,16,5,4,7,6,8,7,9,8,0,9,8,7,8,7,6,5,4,3,2,1]));