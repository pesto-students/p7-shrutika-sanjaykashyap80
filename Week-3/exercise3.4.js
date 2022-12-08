// function createStack() { 
//     return { 
//         items: [],
//         push(item) {
//             // console.log("push this----",this)
//             this.items.push(item);
//         },
//         pop() {
//             // console.log("pop this-----",this)
//             return this.items.pop();
//         }
//         };
//     }
//     const stack = createStack();
//     stack.push(10);
//     stack.push(5);
//     stack.pop();// => 5
//     stack.items;// => [10]
//     console.log(stack.items)
//     stack.items = [10,100,1000];// Encapsulation broken!


    function createStack() {
        // Write your code here...
        let items = []
        return { 
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
        };
    }
    const stack = createStack();
    stack.push(10);
    stack.push(5);
    stack.pop(); // => 5
    console.log(stack.items);// => undefined
