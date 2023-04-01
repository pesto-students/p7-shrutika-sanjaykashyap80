// Problem 8.4: Find if Path Exists in Graph

let n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
function validPath(n, edges, source, destination) {
    const graph = new Array(n);
      for (let i = 0; i < n; i++) {
          graph[i] = [];
      }
      for(let i = 0; i < edges.length; i++) {
          graph[edges[i][0]].push(edges[i][1]);
          graph[edges[i][1]].push(edges[i][0]);
      }
  
      const visited = new Set();
      const stack = [source];
      while (stack.length) {
          const current = stack.pop();
          if (current === destination) return true;
          if (visited.has(current)) continue;
          visited.add(current);
          for (let neighbor of graph[current]) {
              if (!visited.has(neighbor)) {
                  stack.push(neighbor);
              }
          }
      }
      return false;
  };

  console.log(validPath(n, edges, source, destination))