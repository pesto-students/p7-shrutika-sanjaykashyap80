let prices = [7,1,0,3,6,7];
max = 0, l = prices.length, diff = 0;
for(let i=0; i<l; i++){
    for(let j=i+1; j<l; j++){
        diff = prices[j]-prices[i]
        if(diff > max)
        max = diff
    }
}
console.log(max)

// TC => O(n2), SC => O(1)