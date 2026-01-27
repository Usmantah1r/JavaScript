//Practice set Of Arrays
//---------Q1-------------
let arrx=[1,2,3,4,5]
let fg=prompt("Enter a Number")
a=Number.parseInt(a)
arrx.push(a)
console.log(a)
//-----OR----
//---------Q-------------
let arr=[1,2,3,4,5]
let a2=[6,45,7,8,9]
let newarr=arr.concat(a2)
console.log(newarr)
//---------Q-------------
let arry=[1,2,3,4,5]
do {

    let fg=prompt("Enter a Number")
    a=Number.parseInt(a)
    arry.push(a)
    console.log(a)
}while(a!=0)
//---------Q-------------
let arr2=[12,23,4,45,40,50,63,90]
let f=arr2.filter((a)=>{
    return a%10==0
})
console.log(f)
//---------Q-------------
let arr3=[1,2,3,4,5,6]
let sq=arr3.map((square)=>{
return square*square
})
console.log(sq)
//---------Q-------------
let arr4=[1,2,3,4,5,6]
let n=arr3.reduce((x1,x2)=>{
return x1*x2
})
console.log(n)
