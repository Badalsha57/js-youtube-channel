// singleton
// object.create

// object literal object 3 only study for object literal

const Jsuser = {   // curly braces is an object
    name: "badal",
    Email: "badalsha343@gmail.com",
    phone: 8275655757,
    age:21,
    isloggedIn:false,

}
// console.log(Jsuser.Email)
// console.log(Jsuser["Email"])
console.log(Jsuser["name"])
// console.log(Jsuser["Email"]);
// console.log(Jsuser["phone"])

// console.log(Jsuser["age"]);


Object.freeze(Jsuser.Email)    // lock the object useing the freeze method in js

// console.log(Jsuser)

Jsuser.Email = "sharmabihar34@gmail.com"    //can not be change the email,becouse it i private an locked the objects

Jsuser.greeting = function(){
    console.log("hello Js user");
}
Jsuser.greeting1 = function(){
    // console.log('hello Js user,  ${this.name}')  //sorry I'm not understand this line
}
    console.log(Jsuser.greeting())
    console.log(Jsuser.greeting1())

