console.log("Loops In JavaScript")
// (For-Loop)   (For in-loop)   (For of-loop)   (while-loop)   (Do while-loop)
console.log("For-Loop")
// for(let i=0;i<30;i++){
//     console.log(i)
// }
// for(let i=1;i<30;i++){
//     console.log("Chapter",i)
// }
console.log("For in-Loop")
let obj={
    mani: 80,
    hamza: 78,
    ali: 79,
    GM: 84
}
for(let a in obj){
    console.log("Marks of "+ a,"are "+ obj[a])
}
console.log("For of-Loop")
for(let b of "USMAN TAHIR"){
    console.log(b)}
    //WHILE
console.log("While-Loop")
let n=12
n=Number.parseInt(n)
let i=0
while(i<n){
    console.log(i)
    i++
}
console.log("Do While-loop")
let x=5;
do{
    console.log(x)
    x++;
}while(x<n)