let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


let myCreateDate = new Date("2025-03-06")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000))    ///actual time now


let newDate = new Date();
console.log(newDate);
console.log(newDate.toDateString())
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getMinutes())
console.log(newDate.getUTCDate())

newDate.toLocaleString('default',{
    weekday:"long",
})