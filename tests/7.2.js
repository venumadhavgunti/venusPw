//Prefix and postfix operators(unary)

/*
i = 13
j = 11 + 13

i++ means Use the current value of i, then increment it. 
++i means Increment the value of i first, then use it. 

*/

let i = 11
let j = i++ + ++i
console.log(i)
console.log(j)




/*
a = 13
b = 24
c = 11 + 22 + 11 + 22 + 13 + 24
*/

let a1 = 11
let b1 = 22
let c1 = a1 + b1 + a1++ + b1++ + ++a1 + ++b1

console.log(a1)
console.log(b1)
console.log(c1)

let s = 0
let w = s++ - --s + ++s - s--
console.log(s)
console.log(w)

