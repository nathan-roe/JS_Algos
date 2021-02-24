// Alexa is given n piles of equal or unequal heights. In one step, Alexa can remove any number of boxes from the pile which has the maximum height and try to make it equal to the one which is just lower than the maximum height of the stack. Determine the minimum number of steps required to make all of the piles equal in height.

// Example 1:

// Input: piles = [5, 2, 1]
// Output: 3
// Explanation:
// Step 1: reducing 5 -> 2 [2, 2, 1]
// Step 2: reducing 2 -> 1 [2, 1, 1]
// Step 3: reducing 2 -> 1 [1, 1, 1]
// So final number of steps required is 3.

// Input: piles = [1,4,2,3,7,6]
// Output: 16
// Explanation:
// [1,4,2,3,7,6], [1,4,2,3,6,6], [1,4,2,3,6,4], [1,4,2,3,4,4], [1,3,2,3,4,4], [1,3,2,3,3,4], [1,3,2,3,3,3]
// [1,2,2,3,3,3], [1,2,2,2,3,3], [1,2,2,2,2,3], [1,2,2,2,2,2], [1,1,2,2,2,2], [1,1,1,2,2,2], [1,1,1,1,2,2]
// [1,1,1,1,1,2], [1,1,1,1,1,1]


const equalHeight= (arr) => {
    let mindex, maxdex, almaxdex;
    let min = arr[0];
    let max = arr[0];
    let almostMax = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
            maxdex = i;
        }
        if(arr[i] < min){
            min = arr[i];
            mindex = i;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] > almostMax && arr[i] < max){
            almostMax = arr[i];
            almaxdex = i;
        }
    }
    
}