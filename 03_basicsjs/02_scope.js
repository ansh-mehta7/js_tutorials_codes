let a =10
const b =20
var c= 300
// console.log(a);
// console.log(b);
// console.log(c);

if (true){

//     let a =10
// const b =20
var c= 30 // var declares the globally scped variables 
} // scope is limited 
// console.log(a);
// console.log(b);
// console.log(c);

function One(){
    const UserName="hitesh"
    function Two(){
        const Website="youtube"
        console.log(UserName);
    }
    // console.log(Website);
    Two()
}
One()

console.log(addone(5));

function addone(num){
    return num+1
}

console.log(addtwo(5)); // Cannot access 'addtwo' before initialization
const addtwo=function (num){
    return num+2;
}
