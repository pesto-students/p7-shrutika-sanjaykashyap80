function add(a,b){
    return (a+b);
}
test("adding two numbers", () => {
    expect(add(2,2)).toBe(2+2)
})

function diff(a,b){
    return (a-b);
}
test("difference of two numbers", () => {
    expect(diff(2,2)).toBe(2-2)
})

function multiply(a,b){
    return (a*b);
}
test("multiplying to numbers", () => {
    expect(multiply(2,2)).toBe(2*2)
})