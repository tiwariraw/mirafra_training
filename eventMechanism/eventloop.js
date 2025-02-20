console.log("start");
setTimeout(()=>{
    console.log("timeout")
},0);//micro
Promise.resolve().then(()=>console.log("promise resolved"));//its exicute in macro
console.log("end")