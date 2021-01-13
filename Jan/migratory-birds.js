'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let numDic = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};
    for(let i=0;i<arr.length;i++)
    {
        if(numDic[arr[i]-1] > 0)
        {
            continue;
        }
        for(let j=i;j<arr.length;j++)
        {
            arr[i] === arr[j] ? numDic[arr[i]-1] = numDic[arr[i]-1] + 1 : '';
        }
    }
    console.log(numDic);
    var high = numDic[0];
    var retVal = 0;
    for(var key in numDic)
    {
        if(numDic[key] > high)
        {
            high = numDic[key];
            retVal = key;
        }
    }
    return parseInt(retVal) + 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}