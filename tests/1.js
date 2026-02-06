
//Primitive types - Simple and basic
/*
10
Piyush
true

//Reference Types(Pointers) Arrays/Objects, Heap memory location

1. number
2. string
3. boolean
4. null
5. undefined

Symbol and BigInt
sss

1. number
Positive, negative, fraction

Remainder operator - % To find out if a number is odd or even

//Spacing

//Exponentiation operator   - **

*/


//NaN and Infinity
//NaN - Not a number

//Variable Declaration
//Reserving some space in memory + storing something in that
//memory

//let and const

//int number = 0

//Syntax - let someName = value

//Declaration = Reserving space in memory
//Initialization
let counter = 0

//counter + 1
counter = counter + 1       //Assignment operator. RHS->LHS

//constants
const hens = 4
hens = 5        //TypeError: Assignment to constant variable.


const PI = 3.1416
const daysInWeek = 7

//Never use the var variable

//ES6 - Ecmascript
//2015 - Modern JS
//Legacy JS

//Keywords

let windSpeed = 76
windSpeed += 5         //wind_speed = wind_speed + 5       ..81
windSpeed--            //wind_speed = wind_speed - 1       ..80
console.log(windSpeed)

//Underscore is called as snake casing/ Python.
//80

let num = 1_000_000_000_000

let creditCard = 1234_5678_9012_3456

console.log(creditCard)

//Operands - 2
1 + 2       //Binary(2)
counter++   //Unary(1)

//Variable Naming rules

/*
1. Variable names can not start with a number. Example - 3years.
2. Variable names can only contain letters, numbers, underscores or the $ sign.
3. We can not use reserved Javascript keywords as the variable names for example “new”, “function”. 
4. Never use an uppercase letter for creating a variable.
5. Make sure variable names are descriptive.
*/

//Modelling the Data efficiently

//2. Boolean
//Booleans are simply true or false values.

//Readability is CRITICAL
//Is it done
let isLoggedIn = true
let isGameOver = false
const isWaterWet = true

//Variables can change their type. Dynamic typing
let numOfDonuts = 12
numOfDonuts = false         //Assignment
numOfDonuts = "Hey There"   //Assignment

//Typescript language is built on JS and it has stricter rules and one of those rules
// is that variables can not change types.

//Java is multi threaded
//JS is single threaded

//Strings
//Be consistent

let msg = 'Hello """"""World'
let animal = `Ti'""'ger`

//let bad = 'Piyush"

//typeof operator is all in lower case.
typeof operator

console.log(typeof 10)

let firstName = "Ziggy"     //1
let lastName = "Canary"     //2

console.log(firstName[0])
console.log(firstName[4])
console.log(firstName[firstName.length - 1])


//String concatenation
//Strings are immutable

//Unnamed string
//console.log(firstName + lastName)       //3

const result = firstName + lastName //This wont be GC
console.log(result)

//Garbage Collection(GC)

//Automatic type conversion(coercion)
console.log(2 + "hi" + 1)       //"hi" + "1"

//Strings are indexed

//C H   I   C K E   N
//0 1   2   3 4 5   6

//Every string has a property called length

console.log(firstName.length)

//Properties(characteristics)
//Methods(actions)

//Strings are immutable

let name1 = "Piyush"
name1[0] = "p"      //Ignored by JS

console.log(name1)

name1 = "Piyush Gupta"

//string.someMethodName()

//1. toUpperCase()
let msg1 = "you are so grounded"

//Create a new string in the memory
// msg1 = msg1.toUpperCase
console.log(msg1.toUpperCase())     //Unnamed string. JS will GC
console.log(msg1)

let greeting = '      leave me alone        '
greeting = greeting.trim()
console.log(greeting)

//Method Chaining

let color = "      purple         "
color = color.trim().toUpperCase()
console.log(color.trim().toUpperCase())

let tvShow = 'catdog'

//1. Whether the character d is present or not? TRUE/FALSE  includes()
//2. Where the character d is present? Index:3              indexOf()

console.log("baseball".indexOf("b"))

//Is "ball" present or not? YES
//If yes, then give me the index of 1st character which is b
console.log("baseball".indexOf("bill"))     //-1
console.log("baseball".indexOf("ball"))     //4

const baseball = "baseball"
//JS is case sensitive
console.log("Baseball".indexOf("ball")) 
console.log(baseball.indexOf("entertaining")) //-1

console.log("Baseball".indexOf("b"))

console.log("Baseball".indexOf("a")) 

//slice() method - It slices an existing string and it gives you a piece of it.

let str = "This is a super long string"
console.log(str.slice(10))
console.log(str.slice(10, 15))

//replace(replaceWhat, replaceWith) method

console.log("baseball is entertaining".replace("entertaining", "ok"))

console.log('ha ha ha'.replace('ha', 'hee'))
console.log('ha ha ha'.replaceAll('ha', 'hee'))

const text = "JavaScript is fun"

console.log(text.includes("Script"))
console.log(text.includes("script"))

//split() method

//  "" is empty string(nothing)


let text1 = "Hello World"
let words = text1.split(" ")    //Space
console.log(words)

let fruits = "apple,banana,grapes"
console.log(fruits.split(","))

let name1 = "javascript"

console.log(name1.split("sc"))

