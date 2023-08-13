// const tinderuser= new Object ()

const tinderuser={
    
}
 tinderuser.id="1382and"
 tinderuser.name="ansh mehta"
 tinderuser.isLoggedIn=true
// console.log(tinderuser);

const regularuser={
    email:"udfuw@hufhdwf",
    fullname:{
        username:{
            firstname:"ansh",
            lastname:"mehta"
        }
    }
}
console.log(regularuser.fullname.username.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2}
// const obj3=Object.assign({}, obj1,obj2) // object target source 

const obj3={...obj1,...obj2} // using the spread operator 

console.log(obj3); // problamatic insted we cann use assign as well as spread operator 


const users=[
    {
        email:"1",
        id:"euehu"
    },
    {

    },
    {

    }
]
console.log(users[0].id); //using array of objects 
console.log(Object.keys(tinderuser));// returns an array of keys as well as value 

const course={
    name:'jsinhindi',
    price:'1000',
    courseinstructor:'hitesh'
}
// console.log(course.courseinstructor);

const {courseinstructor:instructor}=course // object destructuring 
console.log(instructor);

