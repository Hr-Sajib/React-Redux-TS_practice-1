// basic curry

// function add(a) {
//     return function(b) {
//         return a+b;
//     }
// }
// console.log( add(1)(2) ) 






// use case 


// normal aproach 

// const finalPrice = (amount, discount) => amount-amount*discount;
// console.log(finalPrice(140,.1))
// console.log(finalPrice(220,.1))
// had to call func with two params every time



// curry aproach 

const finalPrice = (discount) => (amount) => amount - amount*discount; // a curry func
const withDiscount = finalPrice(0.1)

console.log(withDiscount(140))
console.log(withDiscount(220))
// this time used curry func to set discount param at 0.1 and passed one param using withDiscount()