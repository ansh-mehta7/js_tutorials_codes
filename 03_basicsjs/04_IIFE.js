// immidiately invoked function expression
// to remove global scope pollution 
// and i want the function to be invoked immidiately 

// named IIFE
(function cofee(){
    console.log("coffee is the need");
})(); // iife  it ends with the semi colon then only its context will end 


//unnmaed IIFE
( (naam) =>{
 console.log(`thank u suits ${naam}`);
})('mehta'); // passing arguments in the IIFE function 
// cofee()
