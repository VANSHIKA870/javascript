let score=33

console.log(typeof score) //number
console.log(typeof(score));

let scoreStr=String(score) //convert number to string
console.log(scoreStr) //33
console.log(typeof scoreStr) //string

let str="123"
let num=Number(str) //convert string to number
console.log(num) //123
console.log(typeof num) //number

//"33"=>33 //string to number
//"33abc"=>NaN //not a number

let isLoggedIn=1;
let booleanValue=Boolean(isLoggedIn) //convert number to boolean
console.log(booleanValue) //true
console.log(typeof booleanValue) //boolean

let isLoggedInStr=String(isLoggedIn) //convert number to string
console.log(isLoggedInStr) //"1"
console.log(typeof isLoggedInStr) //string

let isloggedin=""
let booleanValue2=Boolean(isloggedin) //convert empty string to boolean
console.log(booleanValue2) //false
console.log(typeof booleanValue2) //boolean
//Boolean conversion rules in JavaScript
//1=>true
//0=>false
//""=>false
//"abc"=>true
//null=>false
//undefined=>true

let someNumber=33
let stringNumber=String(someNumber) //convert number to string
console.log(stringNumber) //"33"
console.log(typeof stringNumber) //string

/***************************OPERATIONS*************************** */

let value=3
let negValue=-value
console.log(negValue)//-3

let str1="hello"
let str2="vanshika"

let str3=str1+str2
console.log(str3);// hellovanshika

console.log("1"+2) //12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32

console.log(true)//true
console.log(+true)//1
console.log(+"")//0

let num1,num2,num3
num1=num2=num3=2+2//unreadable code

let gamecounter=100
gamecounter++;//101(postfix operator)
++gamecounter;//101(prefix operator)
console.log(gamecounter)
