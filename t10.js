//More JS Arrays
let a1=[1,2,3,4,5]
let a2=[11,12,13,14,15]
let a3=[31,32,33,34,35]
// console.log(arr)
// delete arr[0]
// console.log(arr, arr.length)
let newarr=a1.concat(a3,a2)
console.log(newarr,newarr.length)
//------------------------------------------------------
//Sort Method
// newarr.sort()
// console.log(newarr)
// newarr.reverse()
// console.log(newarr)
//Splice & Slice
let arr=[1,2,3,4,5,6,7,8,9]
let deletedValues=arr.splice(1,2,551,552,553,554,555)
console.log(arr)
console.log(deletedValues)
let sli=arr.slice(2)
console.log(sli)