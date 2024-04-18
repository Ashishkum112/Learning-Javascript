// // for
// const array =[1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`The current element is ${element} \n`);
// }
// let myarray = ["iron","man"]
// console.log(myarray.length)
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

//while

// let index =0;
// while (index <= 10) {
//     console.log(`Print ${index}`)
//     index =  index + 2;
// }

// for of 
const greetings = "Hello User !"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"united kingdom")
map.set('IN',"India")

//console.log(map)

for (const [key,value] of map) {
    //console.log(key,':-',value)
}



// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'SPIDERMAN'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':-',value)
// }
// =======We finally know that the for of loop is not excuable for objects and can be iterable for arrays,maps etc

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}` )
} 

// for each

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (item) {
    //console.log(item)
} )

function print(item){
    //console.log(item)
}

coding.forEach((item,index,arr) => {
    //console.log(item,index,arr)
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Ruby",
        languageFileName : "rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})