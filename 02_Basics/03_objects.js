// singleton
// Object.create
// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "hitesh",
    "full name": "hitesh chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log([mySym]);

// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)

// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser["email"]);
// console.log(typeof mySym);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
