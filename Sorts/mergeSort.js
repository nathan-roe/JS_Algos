

const mergeSort = (arr) => {
    if(arr.length > 1)
    {
        let mid = arr.length / 2;
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid, arr.length-1);
        mergeSort(leftArr);
        mergeSort(rightArr)
        let i, j, k = 0;
        while(i < leftArr.length && j < rightArr.length)
        {
            if(leftArr[i] < rightArr[j])
            {
                arr[k] = leftArr[i];
                i += 1;
            }
            else 
            {
                arr[k] = rightArr[j];
                J += 1;
            }
            k += 1;
        }
        while(i < leftArr.length)
        {
            arr[k] = leftArr[i];
            i += 1;
            k += 1;
        }
        while(j < rightArr.length)
        {
            arr[k] = rightArr[j];
            j += 1;
            k += 1;
        }
    }
}
const printList = arr => {
    console.log(arr.map(val => val));
}
let a = [1,4,3,2,6,5,8,7,9,0];
printList(a);
mergeSort(a);
printList(a);