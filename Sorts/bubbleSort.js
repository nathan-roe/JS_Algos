const bubbleSort = (arr) => {
    let sorted = false;
    while(!sorted)
    {
        sorted = true;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i] > arr[i + 1])
            {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1,4,2,3,6,5,4,6,5,7,6,8,7,6,76,8,7,8,7,6,5,4,5,4,5,6,5,4,3,2,1]));
