// Problem 7.4: Parenthesis CheckerGiven an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.

let exp = "[()]{}{()()}";
let stack = []

for(let i=0; i<exp.length; i++ ){
    if(exp[i] === "(" || exp[i] === "{" || exp[i] === "["){
        stack.push(exp[i])
    }
    else if(exp[i] === ")" && stack[stack.length-1] === "("){
        stack.pop()
    }
    else if(exp[i] === "]" && stack[stack.length-1] === "["){
        stack.pop()
    }
    else if(exp[i] === "}" && stack[stack.length-1] === "{"){
        stack.pop()
    }
}

console.log(stack.length === 0)