// Problem 8.1: Maximum Depth of Binary Tree

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

function maxDepth(root){
    if(root === null)
    return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

console.log('maxDepth:',maxDepth(root))