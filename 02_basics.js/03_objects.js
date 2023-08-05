// singelton
// object literals 

// Object.create   it is called as construvtor method and in this singelton 


/// how to use symbol as a key value in the object 
const mySym=Symbol("key1")

const JsUser={ // keys and value in objects
    name:"ansh",// strig or boolean or function anything can be given 
    age:18,
    "full name":"ansh",// this type pf key value relation acant be accesssed by  dot operator
    location:"indore",
    isLoggedin:false,
    lastLoginDays:["monday","friday"]

}
console.log(JsUser.location);// method to access the object 
console.log(JsUser["age"]);// becuase key is taken as a string format
console.log(JsUser["full name"]);


/// how to use symbol as a key value in the object 
const mySum=Symbol("key1")
