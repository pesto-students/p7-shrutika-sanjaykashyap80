let arr = [0, 2, 1, 2, 0];
let count0 = 0, count1 = 0, count2 = 0, N = arr.length;

for(let el of arr){
    if(el == 0)
    count0++
    else if(el == 1)
    count1++
    else if(el == 2)
    count2++
}

let output = []

for(let i=0; i<count0; i++){
    output.push(0);
}
for(let i=0; i<count1; i++){
    output.push(1);
}
for(let i=0; i<count2; i++){
    output.push(2);
}

console.log(output)

// TC => O(n), SC => O(1)