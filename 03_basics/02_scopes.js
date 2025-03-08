// scopes
// global level..
// var c = 3452;    // it is not execute so var it is not use for user in js
let name = "suraj"; //.. change the value in block level

if (true) {
  let name = "badal"; //  brecket inside all methed are called the block level
  const b = 34;
  var c = 241; //never use var variable in javaScript ???
}
// console.log(name)
// console.log(b)
// console.log(name);

function one() {
  //  parent classes
  const username = "badal sharma";
  const userId = 231206029;
  function two() {
    const website = "seo help for people"; // sub classes
    console.log(username,userId)
    console.log(userId);
    function three() {
      const greeting = "Thanks for visited this website:";
      console.log(greeting)
    }
    console.log(website);

    three()   //Third execute
  }
  two()   //second execute
}
one()   // first execute

if (true) {
  const username = "sharma@gmail.com:";
  if (username === "sharma@gmail.com:") {
    const address = " fatehpur";
    console.log(username + address);
  }
  console.log(address);
  console.log(username)
}
console.log(username);


// ++++++++++++++++++++++ Interesting ++++++++++++++++++


console.log(addone(28))           //
function addone(num) {          //this is worked becouse do not declare the  const or any variable 
  return num + 1;               //
}

addtwo(6)                                //same problem in down writing
const addtwo = function addtwo(num) {    //does not worked becouse it declared the variable const
  return num + 2;                        //  same the upper problem
};
