// // Synchronous exicution
// console.log("step one to start");
// function longTask(){
//     for(let i=0;i<1e9;i++){
//         // simulating delay 
//     }
// }
// longTask();
// console.log("step two end");

// //Asynchronous execution
// console.log("async start");

// setTimeout(()=>{
//     console.log("processing.....")
// },2000);

// console.log("end");

// // sync callbacks
// function greet(name,cb){
//     console.log(`hello ${name}`);
//     cb();

// }
// function afterGreet(){
//     console.log("after the greet")
// }

// greet("rahul",afterGreet);

// //Async callback

// function fetchData(cb){
//   setTimeout(()=>{
//     console.log("data fetched from the server");
//     cb();
//   },1000);

// }
// function processData(){
//     console.log("processing data");
// }

// fetchData(processData);

// //callback hell

// function step1(cb){
//     setTimeout(()=>{
//         console.log("step1 complete");
//         cb();
//       },1000);
// }
// function step2(cb){
//     setTimeout(()=>{
//         console.log("step2 complete");
//         cb();
//       },1000);
// }
// function step3(cb){
//     setTimeout(()=>{
//         console.log("step3 complete");
//         cb();
//       },1000);
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All steps completed")
//         });
//     })
// })


// //promises to avoid callback hell

// const promise=new Promise((reslve,reject)=>{
//     let sucess=true;
//     setTimeout(()=>{
//         if(sucess){
//             reslve("data fetched ")
//         }else{
//             reject("operation failed")
//         }
//     },2000)
// })

// promise.then(res=>console.log(res))
// .catch(error=>console.log(error));

//Async and Await for simplifying the promises

function fetchData1(){
    return new Promise((res)=>{
        setTimeout(()=>res("data fetched"),2000)
    })
}

async function fetchData2(){
    console.log("fetching data...")
   let data= await fetchData1();
   console.log("data:",data)
}
fetchData2();





