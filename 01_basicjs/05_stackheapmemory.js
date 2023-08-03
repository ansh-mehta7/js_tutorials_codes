// memory in js 
// 2 types stack(primitive) memory and heap(non primitive) memory
// in stack memory copy is created in heap memory refrence is created
let myHomename="honey"
let anothername= myHomename
anothername="maverick ansh"
console.log(anothername);
console.log(myHomename);
// pass by value 
// objects are pass by value in heap 
let userOne ={
userEmail:"user@google.com",
upi:"user@ybl"

}
let userTwo=userOne
userTwo.userEmail="user@apple.com"
console.log(userOne.userEmail);
console.log(userTwo.userEmail);

// pass by refrence changes the value in userOne as well as in userTwo

