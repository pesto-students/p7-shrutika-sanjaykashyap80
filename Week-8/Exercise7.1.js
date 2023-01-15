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

let head = node1

let prev = null
let curr = head

while(curr){
    let nextNode = curr.next
    curr.next = prev
    prev = curr 
    curr = nextNode
}

console.log(prev)
