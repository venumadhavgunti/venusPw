
//Arrays
//Relationship in the data + Ordering

//Array Literal syntax
let arr1 = new Array(1, 2, 3, 4, 5)
console.log(arr1)

let shoppingList = ['cereal', 'milk', 'bread']

console.log(shoppingList.length)
console.log(shoppingList[0])

//Arrays are mutable, strings are immutable
shoppingList[0] = "cheese"

console.log(shoppingList[3])        //undefined

//"Piyush"[0]     -> "P"

//Avoid hardcoding - Big NO
shoppingList[shoppingList.length - 1]

shoppingList[3] = "Curd"

console.log(shoppingList[0])

//push() - Add 1 or more elements on the RHS/end of the array. It also returns the updated length of the array.
//pop() - Removes exactly 1 element from the RHS/end of the array. It also returns the removed element.

//unshift() - Add 1 or more elements on the LHS/beginning of the array. It also returns the updated length of the array.
//shift() - Removes exactly 1 element from the LHS/beginning of the array. It also returns the removed element.

//LHS/Beginning of th Array<---------------------->RHS/End of the Array
//[1, 2, 3, 4, 5]

let colors = ["red", "blue", "pink"]

colors.push("black", "magenta")     //["red", "blue", "pink", "black", "magenta"]
colors.shift()          //["blue", "pink", "black", "magenta"]
colors.push("cyan")     //["blue", "pink", "black", "magenta", "cyan"]
colors.pop()            //["blue", "pink", "black", "magenta"]
colors.pop()            //["blue", "pink", "black"]
colors.unshift("cyan")  //["cyan", "blue", "pink", "black"]

console.log(colors)

//More array methods
/*
1. concat() - Used to merge arrays - creating a new array without modifying existing arrays
2. includes() - Similar like string's includes(). We look for an exact match.
3. indexOf() - Similar like string's indexOf(). Returns -1 if not found.
4. join() - Creates a single string by joining all the array elements
5. reverse() - Reverses the array. It also modifies the same array.
6. slice() - We create a copy of an array/we create a new array with a small portion of existing array
7. splice() - It is used to add/modify/remove elements from somewhere in the middle of an array
8. sort() - Sorting an array. We are modifying the same array.
*/

//1. concat() - Used to merge arrays

let fruits = ['apple', 'banana']
let veggies = ["tomato", "potato", "brinjal"]

console.log(fruits.concat(veggies))
console.log(veggies.concat(fruits))

//2. includes() - Similar like string's includes(). We look for an exact match.

let array1 = [1, 2, 3]

console.log(array1.includes(2))
console.log(array1.includes(200))

let pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))           //true    
console.log(pets.includes('at'))            //false

//3. indexOf() - Similar like string's indexOf(). Returns -1 if not found.

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison'))
console.log(beasts.indexOf('bison', 2))

console.log(beasts.indexOf('giraffe'))

//5. reverse() - Reverses the array. It also modifies the same array.
let array2 = ['one', 'two', 'three']
console.log(array2.reverse())       //[ 'three', 'two', 'one' ]

//4. join() - Creates a single string by joining all the array elements
let elements = ['Fire', 'Air', 'Water']

//Comma is the default separator
console.log(elements.join())

console.log(elements.join(''))
console.log(elements.join('-'))

//6. slice() - We create a copy of an array/we create a new array with a small portion of existing array

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))       //[ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2, 4))    //[ 'camel', 'duck' ]

console.log(animals.slice())   

//7. splice() - It is used to add/modify/remove elements from somewhere in the middle of an array
//Syntax - splice(startIdx, deleteCount, itemsToInsert)

let animals1 = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

//First Req - At index 1, I just want to insert Octopus.

animals1.splice(1, 0, "Octopus")

//['shark', 'Octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
//console.log(animals1)

//Second Req - At index 5, I want to delete 2 items
animals1.splice(5, 2)           //['shark', 'Octopus', 'salmon', 'whale', 'bear']
// console.log(animals1)

//Third Req - At index 3, I want to replace 2 items with "orca" and "grizzly"
animals1.splice(3, 2, 'orca', 'grizzly')
console.log(animals1)           //[ 'shark', 'Octopus', 'salmon', 'orca', 'grizzly' ]

//8. sort() - Sorting an array

let months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()   

console.log(months)     //[ 'Dec', 'Feb', 'Jan', 'March' ]

//JavaScript converts all the numbers to strings and then it tries to sort.
let array3 = [1, 30, 4, 21, 10000]
array3.sort()

console.log(array3)     //[ 1, 10000, 21, 30, 4 ]

//Arrays as Reference types(Pointers)

//Declaration + Assignment
let fruit = "orange"

//1. Create a new memory location color
//2. Copy of the value of fruit memory location and store it inside color memory location.

let color = fruit           //Assignment. RHS -> LHS

//We are comparing primitives(simple and basic types). We are comparing the values, NOT the memory locations.
console.log(color === fruit)    //true

fruit = "watermelon"        //
console.log(color === fruit)    //false

let arr11 = [1, 2, 3]
// let arr22 = [1, 2, 3]
let arr22 = arr11       //Are we creating a new array? NO. Make a second pointer to the same array in the memory

//Arrays are reference types. Here we are comparing the memory locations, not the values. 
console.log(arr11 === arr22)    //777 === 888   // 777 === 777

//Any object that you create, whether it is an array, or a POJO(standalone object), or a class object,
//it gets created inside the heap memory.

arr11.push(4)

console.log(arr22)


const arr33 = [1, 2, 3]

// arr33 = arr11       //Pointer change is NOT allowed.
arr33.push(4)

console.log(arr33)

const arr4 = arr33

//Always use const with arrays. Dont use let.