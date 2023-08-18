 const userName="anshmehta630@gmail.com"// true 
// const userName=""// false // 
   //  const userName=[] // true
   /*
 falsy values
 false,0 ,-0, BigInt 0n, null, undefined, NaN, ""
  */
    
   /*
  truthy values 
  "0"(zero inside string), 'false','true' (anything inside string is truthy), " ", [],{}, function(){} empty function
  */
    
if(userName){
    console.log("got user name");
}
else {
    console.log("not have username ");
}

// Nullish Coalescing Operator (??): null undefined
let val1 ;
// val1=5??10

val1=null?? 10;
// checks the safety of null and undefined value 

val1=undefined??15
console.log(val1);


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")