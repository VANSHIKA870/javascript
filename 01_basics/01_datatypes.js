"use strict" //treates all the code as modern.
//alert(3+3) //we can use alert, prompt and confirm in browser but not in node js
//console.log(3+3) //we can use console.log in both browser and node js

//Data types in JavaScript
//1. Primitive data types: string, number, boolean, null, undefined, symbol
//2. Non-primitive data types: object, array, function

//String
let name="Vanshika"

//Number(range of numbers: -(2^53 - 1) to (2^53 - 1))
let age=21

//Boolean
let isStudent=true

//Null
let city=null //standalone value

//Undefined
let state; //undefined

//Symbol(unique and immutable value)
let id=Symbol("id")

//Object
let person={
    name:"Vanshika",
    age:21,
    isStudent:true
}

//Array
let numbers=[1,2,3,4,5]

//Function
function greet(){
    console.log("Hello, World!");
}   
greet() 

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isStudent) //boolean
console.log(typeof city) //object (null is of type object in JavaScript)
console.log(typeof state) //undefined
console.log(typeof id) //symbol
console.log(typeof person) //object
console.log(typeof numbers) //object (arrays are of type object in JavaScript)
console.log(typeof greet) //function

