console.log("Practice Set on Operators and Conditionals")
let age=13 
age=Number.parseInt(age)
if(age>=10 && age<=20){
    console.log("The Age Is Between 10 and 20")
}
else if(age<10) {
    console.log("The Age Is less 10")
}
else {
    console.log("The Age Is Greater than 20")
}
switch(age)
{
    case '12':
        console.log("The Age Is 12")
        break
    case '13':
        console.log("The Age Is 13")
        break
    case '14':
        console.log("The Age Is 14")
        break
    case '15':
        console.log("The Age Is 15")
        break
    default:
        console.log("Your age is not Special")
}
let num=9
if(num%2==0 && num%3==0){
    console.log("The Number Is divisible by 2 and 3")
}
else if(num%2==0) {
    console.log("The Number Is divisible by 2")
}
else if(num%3==0) {
    console.log("The Number Is divisible by 3")
}
else {
    console.log("The Number Is divisible by neither 2 Nor 3")
}
let ag=17
console.log(ag>18? 'You Can Drive':'You Can not Drive')