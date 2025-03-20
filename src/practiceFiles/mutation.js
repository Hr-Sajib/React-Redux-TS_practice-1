// case-1

// const person = {
//     name: 'Sajib',
//     address: {
//         country:"Bangladesh",
//         city:"Dhaka"
//     }
// }


// const person2 = person;

// person.name = "Rakib"

// console.log(person)
// console.log(person2)
    
    // output:
    // { name: 'Rakib', address: { country: 'Bangladesh', city: 'Dhaka' } }
    // { name: 'Rakib', address: { country: 'Bangladesh', city: 'Dhaka' } }

    // The original object gets updated/muted also loosing its intigrity



// case-2

// const person = {
//         name: 'Sajib',
//         address: {
//             country:"Bangladesh",
//             city:"Dhaka"
//         }
//     }

// const person2 = {
//     ...person,
//     name:"Rashed",
//     address:{
//         ...person.address,
//         city:"Khulna"
//     }
// }

// console.log(person)
// console.log(person2)

    // output:
    // { name: 'Sajib', address: { country: 'Bangladesh', city: 'Dhaka' } }
    // { name: 'Rashed', address: { country: 'Bangladesh', city: 'Khulna' } }

    // this time 2nd object extracted values from 1st one and changed them but 1st object preserved its values





// case-3

import {produce} from "immer"

const person = {
        name: 'Sajib',
        address: {
            country:"Bangladesh",
            city:"Dhaka"
        }
    }

const person2 = produce(person, (draft)=>{
    draft.name = "Akram"
    draft.address.city = "Janina"
})

console.log(person)
console.log(person2)

    // output 
    // { name: 'Sajib', address: { country: 'Bangladesh', city: 'Dhaka' } }
    // { name: 'Akram', address: { country: 'Bangladesh', city: 'Janina' } }

    // this is the aproach Redux uses for preserving states' value intigrity which uses a package named Immer
    // which gives a func produce() which takes original state and the changes we need, and returns new ones
    // but doesnt edit the original one
