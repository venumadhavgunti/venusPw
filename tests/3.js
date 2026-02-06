//Comparison Operators(return a boolean value)

/*
>
>=
<
<=
==      Loose equality(Never use it)
!=      Loose not equality(Never use it)
===     Strict equality
!==     Strict not equality
*/

// Comparing values is very important for making decisions.

//10 > 1      true
//4 > 40      false

console.log("hello".length >= "hello!".length)  //false

//There are 2 versions of equality: == and ===

//== Only checks for the value, not the data type.
//It coerces both the values to the same type and then it tries to
//compare them. Which can lead to unexpected results.

//Coerce means Automatic type conversion
console.log(4 == '4')   //true, number vs string

//=== Both the values and the data type would be compared.
//No automatic type conversion
console.log(4 === '4')  //false

console.log(10 != '10')     //false
console.log(10 !== '10')    //true

//It is stricter hence the name strict equality.

//Truthy & Falsy values

//Every value in JavaScript is a truthy value except for these six falsy values:
/*
false
0
""  Empty string
null
undefined
NaN

Everything else is a truthy value. 
*/

//Declaration + Initialization

let mystery = 0     //truthy value

if(mystery){
    console.log('Truthy')
} else {
    console.log('falsy')
}


//If today is Saturday/Sunday -> I dont need to go to office
//Otherwise I need to go to office.

/*
if(today === 'Saturday' || (today === 'Sunday')
    console.log('Not go to office')
else {
    console.log(':( Cant tell u... Need to see my manager again :)')
    }
*/

let loggedInUser = 'piyush123'

//Automatic type conversion -> Boolean('piyush123')
if(loggedInUser){
    console.log('Truthy')
} else {
    console.log('falsy')
}

//Logical Operators
//AND(&&), OR(||), NOT(!)

/*
AND - Both sides need to be true in order for the final thing to be true.
I am looking for both the trues
*/

//1 <= 4 is read as -> Is 1 less than OR equal to 4

console.log(1 <= 4 && 'a' === 'a')      //true
console.log(9 > 10 && 9 >= 9)           //false

/*
true && true    -> true
true && false   -> false
false && true   -> false
false && false  -> false
*/

/*
OR - Either of the sides need to be true in order for the final thing to be true.
I am looking for atleast 1 true
*/

console.log(1 <= 4 || 'a' === 'a')      //true
console.log(9 > 10 || 9 >= 9)           //true

/*
true || true    -> True
true || false   -> True
false || true   -> True
false || false  -> false
*/

/*
NOT - 
!expression will be give me true if the expression is false
!expression will be give me false if the expression is true
*/

console.log(!null)          //true
console.log(!(0 === 0))     //false
console.log(!(3 <= 4))      //false

//Bang Bang
// !5  -> false-> !false   -> true
console.log(!!5)

//Operator Precedence(Priority)
//Not has the highest priority amongst these three. And has a higher priority than OR. 
//NOT -> AND -> OR

//You can alter it using brackets/parentheses

let x = 7
console.log(x === 7 || (x === 3 && x > 10))      //true

//Short circuiting
//AND - If the left side is false, JavaScript will not execute the right side. 
//OR - If the left side is true, JavaScript will not execute the right side. 

//let x = 7
// x === 6 && x > 10
x === 7 || x > 10

//Ternary operator(3) - It is optional
//Syntax - 
// condition ? expIfTrue : expIfFalse

//Unary operator(1)     a++ or ++a
//Binary operator(2)    a + b

//The reason we use the ternary operator is to shorten the code and make ur code more readable.

let num = 2

if(Boolean(2)){
    console.log('Lucky')
} else {
    console.log('BAD')
}

//condition ? expIfTrue : expIfFalse

num === 7 ? console.log('Lucky') : console.log('BAD')

//We can use a ternary operator to assign value to a variable.

let status1 = 'offline'

let color

// if(status1 === 'offline'){
//     color = 'red'
// } else {
//     color = 'green'
// }

// status1 === 'offline' ? color = 'red' : color = 'green'
color = status1 === 'offline' ? 'red' : 'green'

console.log(color)


console.log(0 || undefined)

/*

The JavaScript OR operator does not give me true or false. It returns one of the operands. 

A || B

A

On MAC, press Command + Control + Space.
On Windows, press Windows key + dot(.).
*/

