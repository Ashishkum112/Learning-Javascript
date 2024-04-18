/// INTERESTING//////


if(true){
let a=10
const b=20;
var c=30;
}
console.log(c) // that is the problem with var that it is also accessible outside the desired scope
//but let and const stays in the scope

console.log(addone(5))
function addone(num)
{
    return num+1;
}

const addTwo = function(num)
{
    return num+2
}
console.log(addTwo(2))