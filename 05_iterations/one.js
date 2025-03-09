// for loop

// for (let i = 0; i <= 50; i++) {
//     const element = "i love you";
//     console.log(element)
// }

for (let i = 0; i < 10; i++) {
//   console.log(`hello world: ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`hii sumit: ${j}  and hii badal: ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j )  // write a table using for loop and this condition

  }
}

let Array = ["badal","sharma","suraj"]
// console.log(Array.length)
for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
    // console.log(element)
    
}

// break and continue

for (let index = 0; index <=20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        // break;
        continue;
    }    
    console.log(`value of find ${index}`)
}