const user = {
    username: "hitesh",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);

// const chai = function (){
//     let username  = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai =  () => {    // ARROW FUNCTION 
    let username  = "hitesh"
    console.log(this);
}

// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// Implicit Return
// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)


// FOR RETURNING OBJECT IN ARROW FUNCTION .... PARANTHESIS IS USED 

const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach(() => {})


    