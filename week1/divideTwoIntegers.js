// make sure that parenthesis are valid in a string valid: ()(())()() not valid: ()())(())
const valParen = (str) => {
    let strArr = str.split('');
    for(let i=0;i<strArr.length;i++){
        for(let j=i+1;j<strArr.length;j++){
            if(strArr[i] === '(' && strArr[j] === ')')
            {
                console.log(strArr);
                strArr.splice(i, 1, -1);
                strArr.splice(j, 1, -1);
                break;
            }
        }
    }
    if(strArr.includes('(') || strArr.includes(')'))
    {
        return false;
    } else {return true}
}
console.log(valParen('()()(()))asdfasdf('));