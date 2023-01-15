class Node {
    constructor(value, next){
        this.value = value
        this.next = (next === undefined ? null:next)
    }
}
 
let node5 = new Node(5)
let node4 = new Node(4,node5)
let node3 = new Node(3,node4)
let node2 = new Node(2,node3)
let node1 = new Node(1,node2)
node5.next = node2
let head = node1

function hasLoop(head){
let slow = head
let fast = head

while(fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next
    if(slow === fast)
    return true
}
return false
}
console.log(hasLoop(head))