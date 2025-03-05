
// +++++++++++++++ Number +++++++++++++++++

const score = 400
// console.log(score)
const balance = new Number(125)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(43))

const otherNumber = 536.3432
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++  Maths +++++++++++++++++==

console.log(Math);


console.log(Math.abs(-4));     // change into the negative sign to positive sign
console.log(Math.round(6.7));  //always high numbe choosing
console.log(Math.floor(7.5)); //always choose the low number in  any float value
console.log(Math.ceil(57.3));   // alway choose the high number in an float number
console.log(Math.min(3,3,54,34534.34,0.11));  /// find the minimum number 
console.log(Math.max(64,65466,656.65,64.75,)); ////find the maximum number


   //// ==========  Random Number  ==============////

   
console.log(Math.random())  ///find  always number between 0 or 1. 
console.log(Math.random()*9+1);
console.log((Math.random()*10)+1);  ////1 + add becouse not random number int 1 or 0 ...it's over he random no 1 to 10
console.log(Math.floor(Math.random()*10)+1)  /// floor mathed is define as avaible in point but not given output in point only number not decimal

const min = 12;
const max = 67;
console.log(Math.floor(Math.random()*(max - min +1))+min);