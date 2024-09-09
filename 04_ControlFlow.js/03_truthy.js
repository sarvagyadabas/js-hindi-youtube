// // // const userEmail = []

// // // if (userEmail) {
// // //  console.log("Got user email");
    
// // // }else{
// // //     console.log("dont have user email");
    
// // // }

// // // // detecting if an array is empty or not
// // // if (userEmail.length===0) {
// // //     console.log("array is empty");
    
// // // }

// // // detecting if an object is empty or not
// // const emptyobj = {}

// // if (Object.keys(emptyobj).length===0) {
// //     console.log("object is empty");
    
// // }

// // Nullish Coalescing Operator (??):null unidentified

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15

// console.log(val1);

// Ternary Operator

// condition ? true: false

const iceTeaPrice = 100

iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80");
