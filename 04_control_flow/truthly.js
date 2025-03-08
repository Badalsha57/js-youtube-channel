const userLoggedIn = "bbadal sharma"

if(userLoggedIn){
    console.log("yes..login here")
}
else{
    console.log("Oop's..wrong user:")
}

// falsly values 

// Ex here : null, 0, -0, undefined, false, "", BigInt  0n, NaN(not a number).

// truthly values

// ex here : " ", "0", 'false',[], {},function(){}


// nullice coalesing oprtor ?? : null, undefined;

let  val1;
  val1 = 5 ?? 10   // o/p = 5
  val1 = null ?? 10    // o/p = 10
  val1 = undefined ?? 11   // o/p = undefined
 val1 = null ?? 12 ?? 66  // o/p = 12
val1 = null ?? undefined  // o/p = undefined
val1 = null ?? undefined ?? 10  // = 10
val1 = "badal" ?? 14      // o/p = badal
val1 = null ?? "badal" ?? undefined ?? 14 ?? 24.7  // o/p = badal


  console.log(val1)

// ++++++++++++++++++ terniary operator ++++++++++++=
// syntax of terniary operator
// condition ? true : false

const teaPrice = 10
teaPrice >= 5 ? console.log("yes enjoy the tea:") : console.log("sry you don't hae money")