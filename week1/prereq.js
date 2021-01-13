function printNums(){
    for(let i=0;i<256;i++)
    {
        console.log(i);
    }
}
// printNums();
function oddFrom1000(){
    for(let i =0;i<1001;i++)
    {
        if(i%2 !== 0)
        {
            console.log(i);
        }
    }
}
// oddFrom1000();
function sumOffOddFrom5000(){
    let count = 0;
    for(let i=0;i<5001;i++)
    {
        if(i%2 !== 0)
        {
            count += i;
        }
    }
    console.log(count);
    return count;
}
// sumOffOddFrom5000();
function printEachIndex(arr){
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
// printEachIndex([1,2,3,4,5]);
function findMax(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}
// findMax([1,2,3,4,5,65,4,3,2,18,9,3,4,2]);
function findAverage(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        count += arr[i];
    }
    console.log(count/arr.length);
    return count/arr.length;
}
// findAverage([1,2,3,4,5]);
function createArrayOfOdds255(){
    let oddArr = [];
    for(let i=0;i<256;i++)
    {
        if(i%2 !== 0)
        {
            oddArr.push(i);
        }
    }
    console.log(oddArr);
    return oddArr;
}
// createArrayOfOdds255();
function greaterThanY(arr, y){
    let newArr = [];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] > y)
        {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}
// greaterThanY([1,2,3,4,5], 2);
function squareArr(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++)
    {
        newArr.push(arr[i]*arr[i]);
    }
    console.log(newArr);
    return newArr;
}
// squareArr([1,2,3,4,5]);
function replaceNegativeWith0(arr){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < 0)
        {
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}
// replaceNegativeWith0([1,2,3,4,-5,1,-4,-3,-2,1,0,0]);
function minMaxAverage(arr){
    let min = arr[0];
    let max = arr[0];
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
        if(arr[i] > max)
        {
            max = arr[i];
        }
        count+= arr[i];
    }
    console.log([min, max, count/arr.length]);
    return [min, max, count/arr.length];
}
// minMaxAverage([1,2,3,4,5,6]);
function shiftArrValToLeft(ar){
    let arr = ar;
    let nextVal;
    let initial = arr[0];
    for(let i=0;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
        console.log(arr[i])
    }
    arr[arr.length-1] = initial;
    console.log(arr);
    return arr;
}
// shiftArrValToLeft([1,2,3,4,5]);
function negativeToDojo(arr){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < 0)
        {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
    return arr;
}
// negativeToDojo([-1-2-3-4,1,2,34,-4,-4,2]);
function randomArrOf10(){
    let arr = [];
    for(let i=0;i<10;i++)
    {
        arr.push(Math.floor((Math.random() * 100) + 1));
    }
    console.log(arr);
    return arr;
}
// randomArrOf10();
function switchFirstLastOfArr(arr){
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
    console.log(arr);
    return arr;
}
// switchFirstLastOfArr([1,2,3,4,5]);
function reverseArrayInPlace(arr){
    for(let i=0;i<arr.length/2;i++)
    {
        [arr[i], arr[(arr.length-1) - i]] = [arr[(arr.length-1) - i], arr[i]];
    }
    console.log(arr);
    return arr;
}
// reverseArrayInPlace([1,2,3,4,5]);
function insertAtIndex(arr, val, idx){
    let newArr = [];
    for(let i=0;i<arr[idx-1];i++)
    {
        newArr.push(arr[i]);
    }
    newArr.push(val);
    for(let i = arr[idx-1];i<arr.length;i++)
    {
        newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr;
}
// insertAtIndex([1,2,3,4,5], 0, 3);
function removeNegatives(arr){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < 0)
        {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    console.log(arr);
}
// removeNegatives([1,-1,2,-2,-3,3,4,5]);
function linearSearch(val, arr){
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i] === val)
        {
            console.log(i);
            return i;
        }
    }
    console.log(false);
    return false;
}
// linearSearch(2, [1,2,3,4,5]);
function iSum(num){
    let count = 0;
    for(let i=0;i<=num;i++)
    {
        count += i;
    }
    console.log(count);
    return count;
}
// iSum(5);
function iFactorial(num){
    let count = 1;
    for(let i=1;i<=num;i++)
    {
        count *= i;
    }
    console.log(count);
    return count;
}
// iFactorial(5);
function rFactorial(num){
    if(num === 1)
    {
        return 1;
    }
    return num * rFactorial(num -1);
}
// console.log(rFactorial(5));

