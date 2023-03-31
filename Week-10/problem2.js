// Problem 8.2 : Validate a Binary Tree

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

let left1 = new TreeNode(1, null, null)     
let right1 = new TreeNode(3, null, null)     
let root = new TreeNode(2, left1, right1)

function isValidBST(node, min, max){
    if(!node)
    return true

    if(node.val <= min || node.val >= max)
    return false

    return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max)
}
console.log(isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))