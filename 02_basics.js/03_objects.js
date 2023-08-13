
// there are two methods of object declaration in javascript 

// singelton using constructor method 
// object literals {}

// Object.create   it is called as construvtor method and in this singelton object is created 

/// how to use symbol as a key value in the object
const mySym = Symbol("key1");

const JsUser = {
  // keys and value in objects
  name: "ansh", // strig or boolean or function anything can be given
  age: 18,
  "full name": "ansh", // this type pf key value relation acant be accesssed by  dot operator
  location: "indore",
  isLoggedin: false,
  lastLoginDays: ["monday", "friday"],
  [mySym]: "mykey", // key value of the symbol
  email: "anshmehta630@gmail.com",
};
console.log(JsUser.location); // method to access the object
console.log(JsUser["age"]); // becuase key is taken as a string format
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// changing object properties
JsUser.name = "ansh mehta";
console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "anshmehta62872@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log(`hello there ,${this.age} `); // using this  we can refrence to the same object 

};
console.log(JsUser.greeting());
