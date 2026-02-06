//Loops - Doing something repeatedly
//Loops allow us to repeat code but in a much more cleaner syntax

/*
for
while
do..while
for..of loop
for..in loop - ONly for objects

forEach() - Method that works like a loop
*/

//for loop
/*

for(initial Expression; condition; increment/decrementExpression){
    Loop body
}

*/

//i = 11
//i -> Loop counter variable
//Number of times are also called as iteration
//i = i + 1   -> i += 3
//i++ means always increment i by 1


for(let i = 1; i <= 10; i += 3){
    console.log("Hello", i)
}

//Infinite loop - When the condition always stay true
// for(let i = 20; i >= 0; i++){
//     console.log("Hello", i)
// }

//Fix
for(let i = 20; i > 0; i--){
    console.log("Hello", i)
}

//For loop and Arrays
const animals = ['lion', 'tiger', 'bear']
//-------------------->
//Hardcoding is a big NO in automation. 
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

// for(let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }

//<--------------------
for(let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i])
}

//Array of objects - objects inside an array
const students = [
    {
        firstName: 'Rahul',
        grade: 95
    },
    {
        firstName: 'Rohan',
        grade: 67
    },
    {
        firstName: 'Rashmi',
        grade: 99
    }
]

//-------------------->
for(let i = 0; i < students.length; i++){
    // console.log(students[i].firstName)
    //console.log(students[i].firstName + " scored " + students[i].grade)
    console.log(`${students[i].firstName} scored ${students[i].grade}`)
}

const word = 'stressed'
//desserts

/*
<---------------------- Right -> Left

d
d + e   -> de
de + s -> des


desserts
*/

//Atomic Habits
let reverse = ''
for(let i = word.length - 1; i >= 0; i--){
    reverse = reverse + word[i]
}
console.log(reverse)

//''    + d -> 'd'
//'d' + 'e' -> 'de'

//reverse()

let word1 = "hello"
console.log(word1.split("").reverse().join(""))     //olleh

//while loop
//A while loop continues to run as long as the condition stays true. 

for(let i = 1; i <= 10; i++){
    console.log("Hello", i)
}

let i = 1
while(i <= 10){
    console.log("Hello", i)
    i++
}

//Puzzle - 
//Target - 7(Fixed)
//Guess - 2, 8, 1, 2, 6, 7

//0.999999
const target = Math.floor(Math.random() * 10)       //0 - 9
let guess = Math.floor(Math.random() * 10)          //0 - 9

// while(guess !== target){
//     console.log(`Target: ${target}, Guess: ${guess}`)

//     guess = Math.floor(Math.random() * 10)  
// }

while(true){
    if(target === guess) break
    console.log(`Target: ${target}, Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)  
}

console.log('YAYA... You win')
console.log(`Target: ${target}, Guess: ${guess}`)

//Use the for loop when you know the number of iterations in advance. 
//Use the while loop when you don't know how many times you want to run this loop.

//for..of loop
//It is a very nice and easy way to iterate over arrays or strings. 

const animals1 = ['lion', 'tiger', 'bear']

// for(let i = 0; i < animals1.length; i++){
//     console.log(animals1[i])
// }


for(const animal of animals1.reverse()){
    console.log(animal)
}

for(const char of 'Piyush'){
    console.log(char)
}

const palette = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

// console.log(Object.keys(palette))
// console.log(Object.values(palette))

//TypeError: palette is not iterable
// for(const key of palette){
//     console.log(key)
// }

// for(const key of Object.values(palette)){
//     console.log(key)
// }

for(const key in palette){
    console.log(key, palette[key])
}

const animals2 = ['lion', 'tiger', 'bear']

for(const key in animals2){
    console.log(key)
}

/*
{
    0: 'lion',
    1: 'tiger,
    2: 'bear'
}

*/

//do-while
//It runs the code first. 
//It checks the condition later.
// That means the code inside the do-while loop will run at least once, no matter what.
// This is the key difference compared to a while loop.

/*
I will try it once,
and then I will decidde if I want to continue or not
*/

/*

do {

} while(condition)

*/

let count = 1

do {
    console.log(count)
    count++
} while(count <= 5)

    