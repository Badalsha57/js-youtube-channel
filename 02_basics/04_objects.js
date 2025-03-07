// const tinderUser = new Object()     // Objects are use always first latter capital
const tinderUser = {}; //  two types f declare the object Exmple = line number 1 nd 2 re similar.

tinderUser.name = "suraj";
tinderUser.email = "some@gmail.com";
tinderUser.isLoggedIn = false;
tinderUser.address = "Bihar";

// console.log(tinderUser);

const fullname = {
  username: {                   //one Objec t inside many objests includes with help of : or {}
    name: {
      firtname: "badal",
      lastname: "sharma",
    },
  },
};
// console.log(fullname)
// console.log(fullname.username.name)

const obj1 = {1:"A",2: "B"};
const obj2 = {4: "D",5: "E"};
// const obj3 = Object.assign({},obj1,obj2)  // basically add the two object use the Object assigned method

const obj3 = {...obj1,...obj2}   // amother method are use basicall add the Object in javascript use to the three dot ex= ...

// console.log(obj3);


// entire() methed basically use in the find the element of presents in code given output  in array order



// Following the DeStructure of Objects
//Curly braces means DeStructure Of the code or name

const course ={
  name: "lucky",
  courselanguage: "english",
  courseInstructor: "badal"

}
const {courseInstructor: Instructor} = course;  // change the courseInstructor into the it's any name the your choice ex = Instructor
console.log(Instructor);

const {courselanguage} = course;
console.log(courselanguage)

const {name} = course
console.log(name);

// Following the API

// {
//  "name": "API"
//  "Sharma": "study"
// }

[
  {},   
  {},     // curly braces this a API method;
  {},
]