"use strict";// treat all js code as newer version 

 // alert(3+3)  we are using node js not browser 
 console.log(4+4) 

  console.log("ansh")
  let name="ansh mehta"
  let age =20
  let isLoggedin=true // boolean type 
  // primitive data types  they are call by value in js 
  // number 
  // bigint  // for large dta or big value 
  // string
  // null-> standalone value  
  // undefined 
  // symbol ->unique 
  // boolean

    //refrence (non  primitive)
  // arrays ,objects,functions
  

  console.log(typeof undefined);
  console.log(typeof null); // object type
 let userEmail; // by deafault it will be undefined 

 const id=Symbol('123')
 const anotherid=Symbol('123')
 console.log(id===anotherid);
 // although the value is same but in symbols the returned data type is diffrent  in symbol 


const bigNumber=848483837292093939n //bigint

const heros=["ronaldo ,jordan ,schwarzennager"] // refrence type 

// anything specified in curly braces is objects 
let myobj={
    name :"ansh mehta ",
     age:20,
     // datatype can be anyting from bolean to function to array as well as another object as well 
}
// functions in js csn also be given a variable value 
 const myFunction= function(){
    console.log("cristiano ronaldo ");
 }
// using function keyword 

 // all non premitive data types are of object typeof 

 
console.log(typeof myFunction);// return function object 
console.log(typeof heros); // return objects 
// symbols will retun the symbol return type 