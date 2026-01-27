//MAP.....Filter.....Reduce
let arr=[45,33,215]
console.log(arr)
//Array MAp Method
let a=arr.map((value,index,array)=>{
    console.log(value)
    console.log(value,index,array)
    return value+1
})
console.log(a)
//Array Filter method
let arr2=[67,23,34,67,2,13,6]
let a2= arr2.filter((a)=>{
    return a<20
})
console.log(a2, arr2)
//Array Reduce method
let arr3=[1,2,3,4,5,7,34,2,1]
let newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)