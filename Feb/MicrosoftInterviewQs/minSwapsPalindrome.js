// Not Working


// Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. If not possible, return -1.

// Example 1:

// Input: "mamad"
// Output: 3
// Example 2:

// Input: "asflkj"
// Output: -1
// Example 3:

// Input: "aabb"
// Output: 2
// Example 4:

// Input: "ntiin"
// Output: 1
// Explanation: swap 't' with 'i' => "nitin"

const minAdjSwaps = (s) => {
    let obj = {};
    let count = 0;
    for(let i=0;i<s.length;i++){
        obj[s[i]] === undefined ? obj[s[i]] = 1 : obj[s[i]] += 1;
    }
    console.log(obj);

    let oddCount = 0;
    let oddKey = '';
    for(let key in obj){
        if(obj[key] % 2 !== 0){
            oddCount++;
            oddKey = key;
        }
        if(oddCount > 1){
            return -1;
        }
    }
// Input: "ntiin"
    let arr = s.split("");
    for(let i=0;i<arr.length/2;i++){
        console.log("outer");
        if(arr[i] !== arr[arr.length-i]){
            if(arr[i] === oddKey){
                for(let t=i;t<arr.length/2;t++){
                    [arr[t], arr[t+1]] = [arr[t+1], arr[t]];
                    if(isPalindrome(arr)){
                        console.log("isPalindrome");
                        console.log(arr);
                        return count;
                    }
                    console.log("inner1");
                }
            }
            else{
                for(let j=i+1;j<arr.length;j++){
                    console.log("inner2")
                    if(arr[i] === arr[j]){
                        for(let t=j;t<arr.length-i;t++){
                            [arr[t], arr[t+1]] = [arr[t+1], arr[t]];
                            if(isPalindrome(arr)){
                                console.log("isPalindrome");
                                console.log(arr);
                                return count;
                            }
                            console.log("inner3");
                        }
                    }
                }
            }
        }
    }
    console.log(arr);
    return count;
}
const isPalindrome = (arr) => {
    for(let i=0;i<arr.length/2;i++){
        if(arr[i] !== arr[arr.length-i]){
            return false;
        }
    }
    return true;
}
// console.log(minAdjSwaps("mamad"));
console.log(minAdjSwaps("ntiin"));