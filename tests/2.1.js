
//String Template Literals

const firstName = "Piyush"
const job = 'teacher'
const birthYear = 1991
const year = 2037

const str1 = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!'
console.log(str1)

//More 
const str2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(str2)

console.log(`I counted ${3 + 4} sheep`)

console.log("I counted ${3 + 4} sheep")
console.log("const obj = new Triangle")

// console.log('String with 
//     multiple lines')

console.log(`String with
     multiple
lines`)

//Be consistent

let color = "  blue  "
console.log(color.length)
console.log(color.trim())
console.log(color.trim(), color.toUpperCase())
console.log(color.length, color.trim(), color.toUpperCase())

console.log(color)

//null and undefined

//null means intentional absence of any value.
//Must be assigned. It is explicit.


//undefined - It is implicit/automatic.
//Any variable that I am creating without an initial value
// will have a default value as undefined.

let loggedInUser = null
console.log(loggedInUser)

//Random Number Generation

//piyush.gupta@apple.com
//piyush.gupta1@apple.com
//piyush.gupta2@apple.com

//Math.random() always gives a fractional value between 0 and 1(Never included).
//The maximum possible value is 0.99999. 

//Generate a random number(whole number) between 1 and 10.

Math.floor(Math.random() * 10) + 1

//faker library for realistic data

const name1="hello"

let name2=name1.toUpperCase()       //HELLO
console.log(name1)