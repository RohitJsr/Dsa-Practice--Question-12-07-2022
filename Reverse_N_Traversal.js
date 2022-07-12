// Reverse N Traversal 
// Description

// You are given a matrix of size n x n. Find the ReverseNtraversal of the matrix. Refer the following figure for better understanding.

// Image


// Input
// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

// Next N lines contain N space separated integers, denoting the values of the matrix.



// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the N traversal of the matrix on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 4 7 5 3 6 9



function solve(arr,size)
{
    let inline=[]
    for(let i=0;i<arr.length-1;i++){
       inline.push(arr[i][0])
    }
    for(let i=arr.length-1,j=0;i>=0&&j<=arr.length-1;i--,j++){
        inline.push(arr[i][j])
    }
    for(let i=1;i<=arr.length-1;i++){
        inline.push(arr[i][arr.length-1])
    }
    console.log(inline.join(" "))
}
function runProgram(input){
 input=input.trim().split("\n")
let tc=+input[0];
let line=1;
for(let i=0;i<tc;i++){
    let size= +input[line++]
    let arr=[];
    for(let j=0;j<size;j++){
        arr.push(input[line++].trim().split(" ").map(Number))
    }
    solve(arr,size)
}
    
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}