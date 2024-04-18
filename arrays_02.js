const marvel_heroes = [
    "Thor","Ironman","Captain America","Hulk",
]

const dc_heroes= ["Batman","joker","SUperman","Aquaman"];

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)
//const allHeros= marvel_heroes.concat(dc_heroes)
//console.log(allHeros)

const all_newHeros = [...marvel_heroes,...dc_heroes]
//console.log(all_newHeros)

const another_array2 = [ 1,2,3,[4,5,6],[6,7,[4,5]]]

const final_array= another_array2.flat(2)

console.log(final_array)

console.log(Array.isArray("Ashish"))
console.log(Array.from(marvel_heroes[2]))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))




