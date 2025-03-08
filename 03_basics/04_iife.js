  
//Immediatlt Invoked Function Expression (IIFE)
  ///\ this is a name iife
(function chai(){
    console.log(`DB CONNECTED`);    //global scope/global level problem solve than usse the paranthesis()....inside  the paranthesis
})();

 // Arrow execution  or 
// simple iife
(   () => {
  console.log(`hello world`)
} ) ();  // semicolon ; always use end the function work
         // write the two iife in a program than always usse the semicolon;  without semicolon than no program execute

// with name use in arrow program

(   (degree) =>{
    console.log(`hello world ${degree}`)
} ) ("B tech");
// with function

(function code(){
    console.log("babu lohar")
}) ()
