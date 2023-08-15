const suits=["mike","harvey","donna"]
const football=["ronaldo ","messi","chethri"]

// suits.push(football)
// console.log(suits);// bcoz array in js can take elements of diff types as well 
// console.log(suits[3][0]);// ronaldo is printed 

const allHeroes=suits.concat(football)
// console.log(allHeroes); // return the new array and merges the two arrays 

const all_new_heroes=[...football,...suits]// breaks the array and spreads all the elements 
// console.log(all_new_heroes);

const anotheArray=[1,2,3,,[4,5,6],7,[6,7,[4,5]]]
const usableArray=anotheArray.flat(Infinity)
console.log(usableArray); // splits ot all the values 

console.log(Array.from("ansh")) // build array
console.log(Array.isArray("ansh")) // returns true or false 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) // alternative of from we can use of as well 

