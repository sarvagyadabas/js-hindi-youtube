const accountId = 144553
let accountEmail = "sarvagyadabas@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
// accountId = 2 // not allowed

accountEmail = "sarvagya@gmail.com"
accountPassword = "123"
accountCity = "Delhi"
console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


