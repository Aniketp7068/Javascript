const accountId = 2345;
let accountEmail = "aniket@google.com";
var accountPassword = 2445;
accountCity = "Kolhapur";

// accountId = 9 // not allowed to change constant
// console.log(accountId);
accountEmail = "ap@ap.com";
accountPassword = 517517;
accountCity = "Pune";
let accountState
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
