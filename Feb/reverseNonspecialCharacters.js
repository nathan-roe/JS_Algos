// Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.

// Examples:

// Input:   str = "a,b$c"
// Output:  str = "c,b$a"
// Note that $ and , are not moved anywhere.  
// Only subsequence "abc" is reversed

// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"

const reverse = (str) => {
    let arr = str.split("");
    let idxArr = [];
    for(let i=0;i<arr.length;i++){
        let isLetter = (/[a-zA-Z]/).test(arr[i]);
        !isLetter ? idxArr.push(i) : '';
    }
    let retArr = new Array(arr.length).fill(0);
    for(let i=0;i<idxArr.length;i++){
        retArr[idxArr[i]] = arr[idxArr[i]];
    }
    let letterArr = arr.reverse().filter(val => (/[a-zA-Z]/).test(val)).map(val => val);
    let j = 0;
    for(let i=0;i<retArr.length;i++){
        if(retArr[i] === 0){
            retArr[i] = letterArr[j];
            j++;
        }
    }
    console.log(str);
    return retArr.join("");

}
console.log(reverse("asdf$%#*&asdf)(asdf"));