// There are 2 types of dataTypes in JS
// Primitve
/*
1. string
2. number
3. boolean
4. null
5. undefined
6. symbl
7. bigint
*/

// Example of primitives

// const name = "Aniket"
// const age = 22
// const isLoggedIn = true
// const outTemperature = null
// let emailId = undefined

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id == anotherId);
// console.log(id === anotherId);


// Reference type / Non- Primitve
/*
1. Array
2. Object
3. Function
*/

// Example of Non-Primitive
/*
const number = [1,2,3,4,5]
const user = {
name: "Aniket",
address: "Kop"
phoneNo: 9022333434
}

function sum(a,b){
return a + b
}
console.log(sum(4,4))

*/
// const BigInt = 123456645324598347520n
// console.log(typeof BigInt);


// **************************************************

//Stack(Primitive), Heap(Non-primitive)

let myUserName = "a1234@google.com"
let anotherUserName = myUserName

anotherUserName = "as123989@google.com"
// console.log(myUserName);
// console.log(anotherUserName);


let user = {
    name: "hitesh",
    upi: "hi@ybl",

}
let anotherUser = user
anotherUser.name = "Aniket"
console.log(user)
console.log(anotherUser);
