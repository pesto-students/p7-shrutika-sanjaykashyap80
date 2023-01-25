// Problem 8.6: All Path from source to target
let graph = [[1,2],[3],[3],[]];

 function allPathsSourceTarget(graph) {
    let res = [];
    let path = [0];
    function dfs(node) {
        if (node == graph.length - 1) {
            res.push([...path]);
            return;
        }
        for (let neighbor of graph[node]) {
            path.push(neighbor);
            dfs(neighbor);
            path.pop();
        }
    }
    dfs(0);
    return res; 
};

console.log(allPathsSourceTarget(graph));