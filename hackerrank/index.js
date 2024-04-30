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



/*
 * Complete the 'getMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getMin(s) {
    // Write your code here
    const breakpoint= [0];
    for (let i=0; i< s.length-1; i++){
        if (s[i] !== s[i+1]){
            breakpoint.push(i+1);
        }
    }
    breakpoint.push(s.length);
    for(let i=0; i<breakpoint.length-3; i++){
        if(s[0] === "("){
            if((breakpoint[i+1]-breakpoint[i]) > (breakpoint[i+2]-breakpoint[i+1])){
                //add to the second part
                s[]
            }else if((breakpoint[i+1]-breakpoint[i]) < (breakpoint[i+2]-breakpoint[i+1])){
                //add to first part
                s.splice
            }else{
                //nothing
            }
        }
    }
    // breakpoints: 0,1,4
    // chunklengths: 1,3,NaN
    return breakpoints
}

            // [0,2,4,6] 8



            
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getMin(s);

    ws.write(result + '\n');

    ws.end();
}
