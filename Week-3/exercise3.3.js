function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

// the output of the code will be 0 because the count inside the createIncrement function having local scope. "let" makes the scope of variable is local so the count is locally scoped and we are destructering the function into two differnt functions which is making it two independent functions that's why we are not able to access the changes of one function inside another function.  