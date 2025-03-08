  // Function's Method


function sharma() {
console.log("B")
console.log("a")
console.log("d")
console.log("a")
console.log("l")
}
// sharma();

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
// addTwoNumbers( 53635,5637)
// addTwoNumbers(12,2123.543)
// addTwoNumbers(112," badal")

function addTwoNumbers(number1,number2){
  let result =number1+number2
//   console.log("result:", result)
  return result
  return number1,number2
}
 const Result = addTwoNumbers(223,46374)
console.log("Result", Result)

function LoginUserMessge (username){
    if(username === undefined){

        console.log("pleae enter your username:")
        return
    }
    // return '${username} just logged in'
}
// console.log(LoginUserMessge("Badal sharma:"))
console.log(LoginUserMessge())