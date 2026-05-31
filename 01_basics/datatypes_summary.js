//primitive datatype
// to tal 7 types:string ,number,boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)//false

const bigNumber=34565435766543536754


//refernce(non primitive)
//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"histesh",
    age:22,

}
const myfunction=function(){
    console.log("hrllo world");
}
console.log(typeof bigNumber);//number
console.log(typeof outsideTemp);//object
console.log(typeof null);//object
console.log(typeof myfunction);//function

//all non primitive datatype is finction object.
