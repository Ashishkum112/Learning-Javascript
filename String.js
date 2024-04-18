// String 

const name ="ashish"
const value = "projects"
const repo = 30

console.log(`${name} has ${repo} ${value}`)

let gameChanger = new String('Ashish_ak') 

console.log(gameChanger[3])
console.log(gameChanger.toUpperCase())

console.log(gameChanger.charAt(4))
console.log(gameChanger.indexOf('h'))
console.log(gameChanger.length)
console.log(gameChanger.indexOf('s'));

const newString = gameChanger.substring(0,4)
console.log(newString)

const  anotherString = gameChanger.slice(-8,4)
console.log(anotherString)

const namee= "   priya   " 
console.log(namee)
console.log(namee.trim());

const url = "https://ashishdev.com/%23rangala"
console.log(url.replace('%23','-'))

console.log(url.includes('priya'));

console.log(gameChanger.split( '_'));
