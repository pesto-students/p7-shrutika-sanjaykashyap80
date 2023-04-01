// Problem 8.5: Find the Town Judge
let n = 2, trust = [[1,2]]
function findJudge(n, trust) {
    let scores = new Array(n+1).fill(0)
    trust.forEach((pair) => {
       scores[pair[0]]--
       scores[pair[1]]++
    });
    for(let i=1; i<=n; i++) {
        if(scores[i] === n-1)
        return i
    }
    return -1
 };

 console.log(findJudge(n, trust))