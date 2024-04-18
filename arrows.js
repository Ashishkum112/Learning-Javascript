// const user = {
//     name : "Ashish",
//     prince : 100,
//     welcomeMessage : function()
//     {
//     console.log(this)
//     console.log(`${this.name},welcome to website`);
// }
// }
// user.welcomeMessage()
// user.name = "Priyanka"
// user.welcomeMessage()


// function chai()
// {
//     let username = "ash"
//     console.log(this);
//     //console.log(this.username) ----its not possible because we cant use this keyword inside a function,can only use inside a object;
// }

// chai()

// const chai = function()
// {
//     username : "a@gmail.com"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     username : "a@gmail.com"
//     console.log(this)
// }
// chai()

// =====Array Function=======

 const addTwo = (num1,num2) => 
 {
    return num1 + num2 
 }
 console.log(addTwo(1,2))

 const addThree= (n1,n2,n3) => (n1+n2+n3)
console.log(addThree(2,3,4))

const object_create = (n1,n2) => ({username : "Ash"})
console.log(object_create(1,2))

