// const user={
//     username:"ansh",
//     price:999,

//     welcomeMessage:function(){

//         console.log(`${this.username} welcome to website`);  // this shows the current context 
//         console.log(this); // prints the current context  as like the object
//     }
// }
// user.welcomeMessage()
 console.log(this); // the current context is the empty object 

 function chai(){
  const username="SUITS"
    console.log(this);
}
chai()