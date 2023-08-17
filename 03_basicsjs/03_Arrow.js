const user={
    username:"ansh",
    price:999,

    welcomeMessage:function(){

        console.log(`${this.username} welcome to website`);  // this shows the current context 
        console.log(this); // prints the current context  as like the object
    }
}
user.welcomeMessage()
 console.log(this); // the current context is the empty object in node enviornment

 //in  browser consoloe.log(this) gives us the window as the global object.
 function chai(){
  const username="SUITS"
    console.log(this.username); // undefined  because this context only works in objects 
}
chai()

 const chai=() =>{ // remove the function keyword
    const username="SUITS"
      console.log(this.username); // undefined  because this context only works in objects in arrow functions as well
      console.log(this);// empty
  }
  chai()

//    const Add= (num1 ,num2)=> {
// return num1+num2
//   }
//   console.log(Add(2,3));

  
  // const Add= (num1 ,num2)=>  (num1+num2) ; // implicit return without return keyword

  //     console.log(Add(2,3));

// how to return objects like these 
const Add= (num1 ,num2)=> ({naam:"ansh"} ) ; // implicit return without return keyword
// we cant return objects like these we have to use parenthesis without the return keyword 
console.log(Add(2,3));