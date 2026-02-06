
const now = 2037
const ageRahul = now - 1991
const ageSarah = now - 2018


console.log(10, 20, 30, 40)

// let x = 10 + 5

console.log(25 - 10 - 5)        //Left -> Right

let x, y
// x = y = 25 - 10 - 5
//x = y = 10
x = 10

//Type Conversion and Coercion

//1. Explicit Type Conversion(Casting)

let num = "123"
let converted = Number(num) //Explicitly converting it to a number
console.log(converted, typeof converted)

let n = 456
let str = String(n)     //Explicitly converting the number to a string

//You are in control

//2. Coercion or Automatic Type conversion

console.log("5" + 2)        //"52"

//- only works on numbers
//String subtraction doesnt make any sense

console.log("5" - 2)        //5 - 2

const input = '1991'
console.log(input + 18)

console.log('I am ' + String(23) + ' years old')

console.log('23' - '10' - 3)

console.log('23' + '10' + 3)

console.log("hello" - "world")

//NaN - Not a number
