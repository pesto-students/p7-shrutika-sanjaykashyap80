let arr =  [ [ 1, 2, 3 ], 
             [ 4, 5, 6 ], 
             [ 7, 8, 9 ] ];
let N = arr.length, top = 0, down = N-1, left = 0, right = N-1, dir = 0;

while(top <= down && left <= right){
    if(dir == 0){
        for(let i=left; i<=right; i++ ){
            console.log(arr[top][i])
        }
        top++;
    }
    else if(dir == 1) {
        for(let i=top; i<=down; i++ ){
            console.log(arr[i][right])
        }
        right--
    }
    else if(dir == 2) {
        for(let i=right; i>=left; i-- ){
            console.log(arr[down][i])
        }
        down--
    }
    else if(dir == 3) {
        for(let i=down; i>=top; i-- ){
            console.log(arr[i][left])
        }
        left++
    }

    dir = (dir+1)%4;
}

// TC => O(n2), SC => O(1)