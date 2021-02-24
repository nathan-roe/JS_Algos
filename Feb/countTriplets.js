// Given an array of distinct integers and a sum value. Find count of triplets with sum smaller than given sum value. Expected Time Complexity is O(n2).

// Examples:

// Input : arr[] = {-2, 0, 1, 3}
//         sum = 2.
// Output : 2
// Explanation :  Below are triplets with sum less than 2
//                (-2, 0, 1) and (-2, 0, 3) 

// Input : arr[] = {5, 1, 3, 4, 7}
//         sum = 12.
// Output : 4
// Explanation :  Below are triplets with sum less than 12
//                (1, 3, 4), (1, 3, 5), (1, 3, 7) and 
//                (1, 4, 5)
const countTriplets = (arr, num) => {
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){

        }
    }
}
console.log(countTriplets([4,3,2,1,5,4,6,5,7,6,7,6,5,4,3,4,5,4,3,2], 12))