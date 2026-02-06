//Apply Functions to Collections of Data

//forEach()
//map()
//filter()
//find()
//some()
//every()
//reduce()

//Arrow functions
//Implicit return

//forEach()
//forEach is a method in JavaScript that internally uses a loop to iterate over elements.
//Accepts a callback function. Calls the callback once per element in the array
//We dont need return keyword
//n refers to each element of the array

const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function (num){
//     console.log(num)
// })

//We need to provide either the function keyword or an arrow
//Callback is like an instruction that I am repeating for every array element
nums.forEach((num) => {
    console.log(num)
})

//Array of Objects because it has multiple objects inside arrays.

const books = [
   {
       title: 'Five Point Someone',
       author: 'Chetan Bhagat',
       rating: 4.2
   },
   {
       title: 'Time Money Freedom',
       author: 'Ray Milton',
       rating: 4.5
   },
   {
       title: 'You Are SuperNatural',
       author: 'Joe Dispenza',
       rating: 4.6
   },
]

// books.forEach((book) => {
//     console.log(book.author)
// })

//For single parameters, parentheses are optional. We can remove them. 
books.forEach(book => {
    console.log(book.author)
})

/*
Where do we use forEach in real time?

We use forEach() when we want to perform the same action on every item in a list, without breaking the loop.

1. Printing or logging data (very common)
You get a list of usernames from an API
You want to print each username in the console

2. UI automation / testing
You have multiple error messages on a page
You want to print all error messages
Or verify each error message is visible

An API returns a list of users
For each user, you want to:
log the name
check status
validate a field

You’re not transforming data - you’re processing each item

GOAL - Use forEach when the goal is an action, not a result.

If the goal is just “do something”, use forEach.

3. Clicking multiple elements in automation

There are 5 checkboxes
You want to click all of them

forEach → do something
map → create something
filter → select something
*/

//2. map()
//It is used to create a new array from an existing array by applying some logic
//on each element of the array. It does not alter/update the original array. Use
//the return keyword inside the callback.

//The newly created array has the same length as the original array.

const texts = ["rofl", "lol", "omg", "ttyl"]

//[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]
//[ 'R.O.F.L', 'L.O.L', 'O.M.G', 'T.T.Y.L' ]
//

//ROFL  -> ['R', 'O', 'F', 'L']     -> join('.')

const caps = texts.map(str => {
    return str.toUpperCase()        //[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]
})

// console.log(texts === caps)     //false

const caps1 = texts.map(str => {
    return str.toUpperCase().split("").join('.')     //[ 'R.O.F.L', 'L.O.L', 'O.M.G', 'T.T.Y.L' ]
})
console.log(caps1)

// const square = (x) => {
//     return x * x
// }

//For a single parameter, we can remove the parenthesis. 
//Explicit return
const square = x => {
    return x * x
}

const multiply = (x, y) => {
    return x * y
}

//Implicit return - In scenarios where we want to return just one expression as
//shown above, we can rewrite this arrow function using parentheses instead of
//curly braces. We also need to omit the return keyword. We can't use a return
//statement or we will get an error. We cant use semicolon also after x*x

//Implicit return is also called automatic return. 

const square1 = x => x * x

console.log(square1(5))

const num1 = [1,2,3,4,5,6,7,8];

//['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']

// const parityList = num1.map(num => {
//     if(num % 2 === 0){
//         return 'Even'
//     } else {
//         return 'Odd'
//     }
// })

// const parityList = num1.map(num => {
//     if(num % 2 === 0){
//         return 'Even'
//     } 
//     return 'Odd'
// })

//ternary operator
//condition ? expIfTrue : expIfFalse

// const parityList = num1.map(num => {
//     return num % 2 === 0 ? 'Even' : 'Odd'
// })

const parityList = num1.map(num => num % 2 === 0 ? 'Even' : 'Odd')

console.log(parityList)
