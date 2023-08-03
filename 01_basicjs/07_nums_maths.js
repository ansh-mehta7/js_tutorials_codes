

const score=400
const balance= new Number(1000)
console.log(balance);
console.log(balance.toString().length);// it has now become string 
console.log(balance.toFixed(2));// it has now become string 

const otherNumber=23.9393
//23.9
console.log(otherNumber.toPrecision(3)); // returns a string
const otherNumber2=123.9393
// precision value rounded off 
console.log(otherNumber2.toPrecision(3)); // returns a string
const otherNumber3=1123.9393
// give rest in exponential form 
console.log(otherNumber3.toPrecision(3));

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN')); // according to inr


console.log(Math.abs(-4));
console.log(Math.floor(4.742)); // we can use ceil and floor in js to round off 

console.log(Math.random()); // always in bw 0 and 1 
console.log(Math.floor(Math.random()*10)+1);

const max=20
const min=10

console.log(Math.floor(Math.random() *(max-min+1))+min)