console.log(2>1)//true
console.log(2>=1)//true
console.log(2<1)//false
console.log(2==1)//false
console.log(2!=1)//true

console.log("2">1)//true
console.log("02">1)//true

//typescript does nkt allow you to compare two different data types.

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

//the reason is that an equality check== and comparisons > < =< <= works differently.
//comparisons convert null toa number ,treating it as 0.
//thats why (3)null>=0 is true and (1) null>0 is false.

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false

//strict check(===)

console.log("2"===2)// in this it also check the data type 

