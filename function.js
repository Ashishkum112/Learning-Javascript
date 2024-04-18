// function printName(){
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }


// // printName()

// // function addTwoNumbers(num1,num2)
// // {
// //     console.log(num1+num2);
// // }

// // addTwoNumbers(3,4) 

// function addTwoNumbers(num1,num2)
// {
//     let result = num1 + num2;
//     return result;
//     // console.log("Ashhhhh") ---- This is out of scope
// }

// const result= addTwoNumbers(3,4)
// //console.log("The result is " ,result)


// // function loginUserMessage(username)
// // {
// //     if(username === undefined)
// //     {
// //         console.log("Please enter a valid username")
// //         return 
// //     }
// //     //return `${username} just loggged in `
// // }


// // // console.log(loginUserMessage("Ashish"))
// // console.log(loginUserMessage())


// function loginUserMessage(username = "sam")
// {
//     if(!username)
//     {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} has just logged in ` 
// }

// //console.log(loginUserMessage("Ashish"))

// function calculateCartPrice(val1,val2,...num1)// in this line the val1,val2 is not going to pass;

// {
//     return num1 ;  
// }
// //console.log(calculateCartPrice(200,100,1000,123,1231,1))

// //Creation of an object
// const user = {
//     username : "Ashish",
//     price : 199
// }
// //Creation of a function
// function handleObject(anyObject)
// {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)  
// }
// //Calling of a fucnction and passing the object
// //handleObject(user)

// //calling the function directly by passing the ojects with the details directly
// handleObject({username : "ash",
// price : 100
// }) 
const new_Array = [200,300,400,500]

function Returnarray(getArray)
{
    return getArray[1]
}

console.log(Returnarray(new_Array))
console.log()


