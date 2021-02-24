var minDeletions = function(s) {
    let org = {};
    let count = 0;
    for(let i=0;i<s.length;i++){
        org[s[i]] === undefined ? org[s[i]] = 1 : org[s[i]] += 1;
    }
    console.log(org);
    let arr = [];
    for(let key in org){
        arr.push(org[key]);
    }
    let boolVal = false;
    while(!boolVal){
        boolVal = true;
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i] === arr[j] && arr[i] !== 0){
                    let arr2 = [...arr];
                    while(arr2.splice(j, 1).includes(arr[j]) && arr[j] !== 0){
                        arr[j] = arr[j]-1;
                        count++;
                        boolVal = false;
                    }
                }
            }
        }
    }
    console.log(arr);
    return count;
};