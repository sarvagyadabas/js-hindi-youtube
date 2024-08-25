function sayMyName() {
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}

// sayMyName

// function add2Numbers(number1,number2){
//     console.log(number1+number2);
// }

function add2Numbers(number1, number2) {
    // let result = number1 + number2
    // return result 

    return number1 + number2

}
const result = add2Numbers(3, 4)
// console.log(`The sum of two numbers is ${result}`);

// console.log("Result:",result);

function loginUserMessage(username = "sam") {
    if (username === undefined || !username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"));

function CalculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(CalculateCartPrice(200,400,500,2000));


const user = {
    username:"hitesh",
    prices:199
}

function handleObject (anyObject){
    console.log(`Usernme is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
/*handleObject({
    username:"sam",
    price:399,
})*/

const myNewArr = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,600,800]));



