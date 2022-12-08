// ----------bind-------------
function add(a,b){
    return this.a + this.b;
}

const sumB = add.bind({a:2,b:3})
console.log(sumB());

var module = {
    x: 42,
    getX: function(){
        return this.x;
    }
}

var fn = module.getX.bind(module)
console.log(fn());

function product(a,b){
    return a*b;
}

const double = product.bind(null, 2)
console.log(double(100))

// ------------------call------------------
function greet(name){
    // this = obj
    var reply = [
        name,
        'typically sleep between',
        this.sleepDuration
    ].join(' ');
    console.log(reply)
}

var cats = {
    animal: 'cats',sleepDuration:'12hr'
}
var dogs = {
    animal: 'dogs',sleepDuration:'8hr'
}

greet.call(cats,"me")
greet.call(dogs)

// ----------------apply-------------
var numbers = [5,6,3,4,2,2,6]

var max = Math.max.apply(null, numbers);
console.log(max);