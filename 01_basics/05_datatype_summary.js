// let score = 100;
// let accountNumber = 367;

// console.log(score);
// console.log(accountNumber);

// data type
// premitive datatype
//  thera are 7 datatype
//  1.boolean
//  2.string
//  3.Number
//  4.BigInt
//  5.symbol
//  6.undefined
//  7.Null

const Id = Symbol("232");
const anotherId = Symbol("232");
console.log(Id === anotherId);

// Reference dtatatype  or  // Non-premitive data-type
// 1.Fuction
// 2. object'c
// 3. Array

const heros = ["saktiman", "father", "mother"];
let myobj = {
  Name: "Badal",
  age: 43,
};
const myfunction = function () {
  console.log("hello world");
  console.log(age);
};

// bigNumber = 43476743284u3284n


console.log(typeof bigNumber);



// ************************
// stack and heap memory


let myYoutubeName = "chaii or code"
let anothername = "team's india"

console.log(myYoutubeName);
console.log(anothername);

let userone = {
  email: "hardic01@gmail.com",
  age: 35,
}
let usertwo = userone;   //equal userone and usertwo

usertwo.email = "virat01@gmail.com"    //change the userone Email...

console.log(userone.email);
console.log(usertwo.email);