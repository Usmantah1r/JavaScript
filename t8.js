console.log("Functions in JS")
function oneplusavg(x,y){
    console.log("Done")
    return 1+(x+y)/2
    // return Math.round(1+(x+y)/2)
}
let a=3
let b=6
let c=4
console.log("One plus Average of a and b is ",oneplusavg(a,b))
console.log("One plus Average of a and c is ",oneplusavg(a,c))
console.log("One plus Average of b and c is ",oneplusavg(b,c))
const hello=()=>{
    return "hello"
}
console.log(hello())