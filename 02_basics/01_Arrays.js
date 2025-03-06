// Arrays
const myArr = [0,1,24,3,4,5]
const myHeros = ["Shaktiman","nagraaj"]

console.log(myArr[2])

//   Arrays Methods....

// myArr.push(5);
// myArr.push(677);    //add the element
// myArr.pop();    //remove  always the element 
// myArr.unshift(34); // add the element in first position
// myArr.shift();   // remove the unshift element in firt position
// console.log(myArr);

// console.log(myArr.includes(64));  //include define the valuea available in the arr list

// console.log(myArr.indexOf(4));  // define the indx position


const newArr = myArr.join(); // change the object
// console.log(myArr)
// console.log( typeof newArr);   // type of  the String
 

// Slice  or Splice
console.log("A ",myArr)
const myn1 = myArr.slice(1,3);   // define the value of not inclues 3 called  slice
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)  // define the  value in inlude the 3 called splice
console.log(myn2)
console.log("C ",myArr)
