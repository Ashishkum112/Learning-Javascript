const New_User = {
    full_name : {
        user_fullname : {
            firstname : "Ashish",lastname : "Kumar"
        }
    },
    age : 23,
    email : "priya@gmail.com",
    isLoggedIn : false
}

console.log(New_User.full_name.user_fullname)

 const obj1 = { 1 : "a",2: "b"}
 const obj2 = {3 : "c",4 : "d"}
 const obj3 = {5 : "e",6 : "f"}

//  const obj4 = {obj1,obj2,obj3}
//  console.log(obj4)

3// assign operator(We dont use that much)

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

// SO we use....practically

const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4)

const users  = [
{
    id : 1,
    email : "insidearray@gmail.com"
},
{
},
{
},
]
// console.log(users[0].email)

// console.log(Object.keys(New_User))
// console.log(Object.values(New_User))
// console.log(Object.entries(New_User))

// console.log(New_User.hasOwnProperty("isLoggedIn"))

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Ashish"
}
//----------Destructuring Objects -----
//------------------Syntax==============
//course.courseInstructor



const {courseInstructor} = course
// console.log(courseInstructor)

const{courseInstructor : instructor} = course;
// console.log(instructor)


 

