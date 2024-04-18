// Truthy values
//anything inside the if(email) is true

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN 

//truthy values

// "0",'false'," ",[],{},function(){}

// const useremail = []
// if(useremail.length === 0)
// {
//     console.log("Entered")
// }

// const obj = {}
// if(Object.keys(obj).length === 0){
//     console.log("Object is empty")
// }

// Nullish COalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;

//----------It gives the other value than null
val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 15

console.log(val1)

val1 = undefined ?? 20 ?? 10;
console.log(val1)

//---------Ternary Operator--------

// condition ? true : false

const price= 100;
price > 200 ? console.log("Price is greater than 200") : console.log("Price is less than 200")
