const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function customPromise(executor){
   let state = PENDING;
   let value = null;
   let handlers = [];
   let catchers = [];

   function resolve(result){
      if(state !== PENDING) return;

      state = FULFILLED;
      value = result;
      handlers.forEach((h) => h(value))
   }

   function reject(err){
      if(state !== PENDING) return;

      state = REJECTED;
      value = err;
      catchers.forEach((h) => h(value))
   }

   this.then = function(SuccessCallback){
        if(state === FULFILLED){
            successCallback(value)
        } else {
            handlers.push(SuccessCallback)
        }
   }
   this.catch = function(FailureCallback){
        if(state === REJECTED){
            FailureCallback(value)
        } else {
            catchers.push(FailureCallback)
        }
   }

   executor(resolve, reject)

}

function getNumber() {
    return Math.floor(Math.random()*1000)
}

const doWork = (res, rej) => {
    let num = getNumber()
    console.log(num)
    if(num%5 == 0 ){
        setTimeout(() => {res('Promise resolved')}, 1000)
    }
    else {
        setTimeout(() => {rej('Promise rejected')}, 1000)
    }
}

let getDivFiveNum = new customPromise(doWork)

console.log(getDivFiveNum);

getDivFiveNum.then((val)=>{
    console.log("then log", val)
})
getDivFiveNum.catch((val)=>{
    console.log("catch log", val)
})

// function getNumber(){
//     let num = Math.floor(Math.random())*1000
//     if(num%5 == 0){
//         console.log("resolve")
//     }
//     else {
//         console.log("reject")
//     }
// }




// console.log( Math.floor(Math.random()*1000))