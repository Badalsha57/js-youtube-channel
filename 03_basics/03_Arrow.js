// Arrow Declaration
// This keyword use in js script

const user = {
    username:"badal",
    price: 999,
    WelcomeMessage:function(){
        console.log(`${this.username},welcome to website`);  //This keyword = this keyword refers to current object
        // console.log(this)
    }
    
}
// user.WelcomeMessage()
// user.username = "sharma jii"   // this is a content or  // change the username
// user.WelcomeMessage()

// console.log(this)

// const chaii = function(){
//     let username: "anmol";
//     console.log(this.chaii)
// }
 
// +++++++++++++++++++++++   ....ARROW Function......   +++++++++++++

const chaii = () => {
    let username = "anmol"
    // console.log(this)
}

// chaii()

// ++++++++++++++++ Basic Arrow Syntax  +++++++++++++++++++
() => {} 

//simple example

// const addtwo = (num1,num2) => {
//     return num1+num2;              // use curly brace than always use the return value/method

// }
// console.log(addtwo(53,83))

//Emplicit return

const addtwo = (num1,num2) => num1+num2
                                              // without curly braces {}, execute nAnd not use the return method
console.log(addtwo(25,65))

