// Problem 7.5: Next Greater ELement
// Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. If there does not exist next greater of currentelement, then next greater element for current element is -1. For example, next greaterof the last element is always -1.


let N = 4, arr = [1, 3, 2, 4];
let output = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] < arr[i+1])
    output.push(arr[i+1])
    else
    output.push(-1)
}

console.log(output)
