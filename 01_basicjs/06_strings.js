const name="ansh-mehta"
const reopCount= 23
console.log(name+reopCount+"hello world");
// outdated syntax
console.log(`hello my name is ${name} and my repo count is ${reopCount} `);// string interpolation we create placeholders and directly inject values using backticks
const gameName= new String("ans/h/meh/ta")// objectr invoking 
console.log(gameName[0]); // key value pair 


// string accessing methods
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('m'));

 const newString=gameName.substring(0,4)
 console.log(newString);
// slice can have negative values 
 const anotherString=gameName.slice(-9,4)
 console.log(anotherString);

const newStringOne="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the unnecessary spaces

const url="https://ansh.com/mehtamaverick%200mehta"
console.log(url.replace('%20','007'))
/// we can also use url.includes to find a particular set of string or substring it will return true or false 

// we can convert the string that will return in array in array we want to split in diff parts 
console.log(gameName.split('/'));

var ansh="mehtansh"
ansh.slice(0,1)
