// Find the contiguous subarray within an array, A of length N which has the largest sum.
let arr = [-2,-3,4,-1,-2,1,5,-3]
let max_so_far = Number.NEGATIVE_INFINITY;
let max_ending_here = 0;

for( let el of arr ) {
    max_ending_here = max_ending_here + el;
    if( max_so_far < max_ending_here ) {
        max_so_far = max_ending_here;
    }  
    if( max_ending_here < 0 )
    max_ending_here = 0
}

console.log(max_so_far);

// TC => O(n), SC => O(1)