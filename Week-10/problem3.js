// Problem 8.3: Binary Tree Level Order Traversal

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let right2 = new TreeNode(7, null, null)     
let left2 = new TreeNode(15, null, null)     
let right1 = new TreeNode(20, left2, right2)     
let left1 = new TreeNode(9, null, null)     
let root = new TreeNode(3, left1, right1)

function levelOrder(root) {
    console.log('root ',root)
    if(!root) return []
    let result = []
    let queue = [root]
    let flag = 0
    console.log('queue ',queue)
    while(queue.length){
        let size = queue.length
        let currentLevel = []
        for(let i=0; i<size; i++){
            let currentNode = queue.shift()
            console.log('currentNode:',currentNode,'i:',i)
            currentLevel.push(currentNode.val)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        result.push(currentLevel)
    }
    return result
}
console.log(levelOrder(root))