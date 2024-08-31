// var c = 300
let a = 300
// if (true) {    // true means that this if condition has to be definitely executed
//     let a = 10
//     const b = 20
//     console.log("INNER:",a);
    
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
   //    two()
}

one()

if (true) {
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website);
 }
 // console.log(username);
 
 // +++++++++++++++++++++interesting++++++++++++++++++++++

 console.log(addone(5))
 function addone (num) {
    return num+1
 }

//  console.log( addTwo(5))  ---- THIS WILL SHOW ERROR BECAUSE THE FUNCTION IS INSIDE A VARIABLE

 const addTwo = function name(num) {
    return num+2
 }
