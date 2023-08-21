// array specific loops 
// for of loop [{},{},{}]
// array and objects both are itteratble 

const arr=[1,2,3,4,5];
for (const num of arr)// only variable declartion no increament no decreament 
 {
    console.log(num);
    
} // 1 2 3 4 5 
// can be applied on strings as well  
const greetings="hello ansh"
for (const greet of greetings) {
    console.log(greet);
}
Maps in js 
let map=new Map
map.set('IN', "India")
map.set('USA', "united states of america ")
map.set('IN', "India") // only unique values in map 
console.log(map);

for (const [key,value] of map) // array destructire 
{
    console.log(key,':-', value);
}

const myObject={
    game1:"suits",
    game2:"maverick"
}
for (const [key,value] of myObject) {
    console.log(key,':-', value);
} // for of loop doesnt work in  objects 


// OBJECT WORKS ON FOR IN LOOP
const newObject={
    js:"javascript",
    cpp:"c++",
    py:"pyth0n"
}
// console.log(newObject);// object  console log 
// for (const ansh in newObject) {

//     console.log(ansh); // key  printed
// }
for (const ansh in newObject) {

    console.log(newObject[ansh]); // key value pair  printed
}



let company=["google",'amazon',"adobe"]
for (const key in company) {
    console.log(key)
    console.log(company[key]) // key value opairs of array
} // prints the keys of array which is nu,bers and starts with zero 0 1 2 3 


