//  // if statement always use the true value : without true  alue than can't execute.
// // use operator example : <, >, ==, <=, >=, !=, ===, !== . 
// // use of <

if(2 < 4 ){
    console.log("Ececuted:")
}

// // use of >

if(2 > 1){
    console.log("Executed:")
}

// // use of <=

if(5<=5){
    console.log("Executed:")
}

// //use of >=

if(5>=4){
    console.log("Executed:")
}

// //use of ==

if(2 == 2){
    console.log("Executed:")
}

// // use of ===   or check the typeof the condition
// // if(3===3)

if("badal" === "badal"){
    console.log("Executed:")
}

// // use of !=

if(10 != 4){
    console.log("Executed:")
}

// // use of !==

if(5 !== 6){
    console.log("Executed:")
}


// // ++++++++++++++++ if else statement 

const result = 90;
if(result > 23){
    console.log("pass:")
}else{
    console.log("fail:")
}


// +++++++++++++++++ Interesting ++++++++++++++


const userLoggedIn = true
const debitcard1 = true
if (userLoggedIn && debitcard1) {
    console.log("yeah: this is item is for you: please purchhes this item:")
}
else{
    console.log("Not eligible for purches this item:")
}

const userLoggedIn1 = false
const debitcard = true
if (userLoggedIn1 && debitcard) {
    console.log("yeah: this is item is for you: please purchhes this item:")
}
else{
    console.log("Not eligible for purches this item:")
}

