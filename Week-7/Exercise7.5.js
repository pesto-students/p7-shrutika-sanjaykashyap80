let  A = [5, 10, 3, 2, 50, 80], l = A.length, B = 78, diff = 0, output = 0;
for(let i=0; i<l-1; i++){
    for(let j=i+1; j<l; j++){
        diff = A[j]-A[i]
        if(diff == B) {
            output = 1;
            break;
        }
    }
}
console.log(output)

// TC => O(n2), SC => O(1)