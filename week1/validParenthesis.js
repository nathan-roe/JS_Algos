// Make sure that parenthesis are valid
//  ()()()()())
const valid = (str) => {
    let strArr = str.split('');
    for(let i=0;i<strArr.length;i++)
    {
        for(let j=0;j<strArr.length;j++)
        {
            if(strArr[i] === '(' && strArr[j] === ')')
            {
                strArr.splice(i, 1, -1);
                strArr.splice(j, 1, -1);
            }
        }
    }
    if(strArr.includes('(') || strArr.includes(')')){
        return false;
    } else {
        return true;
    }
}
console.log(valid('(()) (())(()())'))