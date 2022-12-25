let arr = [-1, 2, 1, -4], target = 1;
arr.sort((a,b) => a-b)
console.log(arr)

let nearSum = 10000000
for(let i=0; i<arr.length-2; i++){
  let ptr1 = i+1, ptr2 = arr.length-1
  while(ptr1 < ptr2){
    let sum = arr[i]+arr[ptr1]+arr[ptr2]
    if(Math.abs(target - sum) < Math.abs(target-nearSum)){
        nearSum = sum
    }
    if(sum > target){
        ptr2--
    }
    else{
        ptr1++
    }
  }
}

console.log(nearSum);

// TC => O(n2), SC => O(1)