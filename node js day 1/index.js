// let x=10


// setInterval(()=>{
//     console.log(x);
// },2000)


// for(let i=0;i<5;i++){
//     console.log(i);
// }

// document.write('Hello')

// console.log(Math.random()); 

// console.log(window); //error

// console.log(global);

// fetch()


//  let {student,printMsg} =require('./index2')


//  printMsg("hello world")

//  console.log(student);
////////////////////////////////////////////////////////////////
//   const fs =require('fs')
//  const events= require('events')

//   console.log(fs);

//  let data  =fs.readFileSync('./test.txt',{encoding: 'utf8'})
//  console.log(data);
//  console.log("finished");


// fs.readFile('./test.txt',{encoding: 'utf8'},(err,data)=>{
//    if(err){
//     console.log(err);
//    }

//    console.log(data);
//    console.log("finished");
// })


// let message="hello world!"

// // fs.writeFileSync('./test.txt',message)
// // console.log("finished");


// // fs.appendFileSync('./test.txt',message)

// fs.appendFile('./test.txt',message,(err)=>{

//     console.log("finished");
// })

////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(process.argv);
const fs = require('fs')

let [, , command] = process.argv


if (command == "create") {
  
} else if (command == "list") {


}else if (command == "update"){
 



}