
//Objects
// const fitbitdata = [
//     308727,
//     1826,
//     211.70,
//     5755
// ]

// const fitbitdata = {
//     totalSteps: 308727,
//     totalFloors: 1826,
//     totalMiles: 211.70,
//     avgCalorieBurn: 5755
// }

const fitbitdata = {
    "totalSteps"     : 308727,
    totalFloors     : 1826,
    totalMiles      : 211.70,
    avgCalorieBurn  : 5755,
    45              : 'forty five',
    "full name"       : 'Piyush Gupta'
}

//Use the dot notation as the 1st preferred choice
//Use the square bracket syntax for dynamic expressions
console.log(fitbitdata.totalSteps)
console.log(fitbitdata.totalFloors)
//console.log(fitbitdata[totalFloors])    //totalFloors is treated like a variable
//console.log(fitbitdata['totalFloors'])
//console.log(fitbitdata.45)      //Cannot use the dot notation for numeric key. 
console.log(fitbitdata[45]) 
console.log(fitbitdata["full name"])
//console.log(fitbitdata."full name")

//In JavaScript, keys are automatically converted to strings.
//Keys are automatically stringified.

let data = {a: 1}

const palette = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

// palette.red
// palette['red']
// console.log(palette.hello)

let color = 'yellow'

//palette.color means -> Do we have a property called colour inside the palette object? 
console.log(palette.color, palette.red)      //undefined

//VSCode will evaluate the variable color
//Use the square bracket syntax for dynamic expressions
console.log(palette[color])

const userReview = {}

userReview.mrSmith78 = 3.5
userReview['queenBee'] = 4.0

console.log(userReview)

//Nested Array 
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Arts'],
    exams: {
        midTerm: 90,
        final: 85
    }
}

student.strengths[1]

student.exams.midTerm

student.exams['midTerm']

const student1 = student

console.log(student === student1)

delete student["firstName"]

//ArrayList ❌
//Set  - Removing duplicates 
//Map  - 
