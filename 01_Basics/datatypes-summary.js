// // PRIMITIVE

// // 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id==anotherId);

// const BigNumber= 4383487874838547834n

// // JavaScript is a dynamically typed language 

// // REFERENCE (NON-PRIMITIVE)
// // Arrays, Objects, Functions

// const heroes=["shaktiman","nagraj","doga"]

// let myObj = {
//     name:"hitesh",
//     age: 22,
// }

// const myfunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof BigNumber);
// console.log(typeof myfunction);
// console.log(typeof heroes);



//////////////////////*********************************////////////////////

// Stack(Primitive)  ,   Heap(Non-Primitive)

let myYtName="hiteshChaudharydotcom"
let anotherName=myYtName

anotherName="chaiaurcode"

console.log(myYtName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi : "user@ybl",
}
let userTwo= userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
