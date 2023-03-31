// Problem 7.6: Implement a Queue using 2 stack

class Queue {
    constructor(){
        this.s1 = []
        this.s2 = []
    }
    enqueue(x){
        this.s1.push(x)
    }

    dequeue(){
        if(this.s2.length === 0){
            while(this.s1.length > 0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }
}

let queue = new Queue();

let queries = [1, 2, 1, 3, 2, 1, 4, 2]
let i = 0;

while(i < queries.length){
    if(queries[i] === 1){
        queue.enqueue(queries[i+1])
        i = i+2
    }
    else if(queries[i] === 2){
        console.log(queue.dequeue())
       i = i+1
    }
}

console.log(queue)