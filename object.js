// singleton
// object create






// Object literals

const JsUser = {
    full_name : {
        user_fullname : {
            firstname : "Ashish",lastname : "Kumar"
        }
    },
    age : 23,
    email : "priya@gmail.com"
    ,isLoggedIn : false
}

//console.log(JsUser.name);
//console.log(JsUser["name"]);

JsUser.email = "priyaNew@gmail.com";

//console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email = "Latest@gmail.com"

//console.log(JsUser)

JsUser.greeting = function()
{
    console.log("Hello Js User")
}

console.log(JsUser.greeting);




