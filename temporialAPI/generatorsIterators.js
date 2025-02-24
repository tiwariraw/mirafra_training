//lazy evaluation and infinite sequences and custom iteration 

//Iterator: its an object 
function createIterator(arr){
    let index=0;
    return{
        next:function(){
            return index<arr.length
            ?{value:arr[index++],done:false}
            :{value:undefined,done:true}

        }
    }


}
const Iterator= createIterator(["apple","banana","garpes"]);
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())

//Generator
//usage: 1.memory efficiency values are generated on demond insted of all at once
      // 2.lazy evaluation: a function runs only when needed
    //   3. infinite sequnces: its works on infinite loop without freezing the app
    //   4.Async operations: handles Async code in structured way

console.log("...................")
function* generator(){
    console.log("STEP 1")
    yield "step1";
    console.log("STEP 2")
    yield "step2";
    console.log("STEP 3")
    yield "step3";
}

const gen=generator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//Note: YEILD IS PAUSE AND NEXT FOR RESUME

//paginated API requests

// async function* fetchUsers(){
//    let page=1;
//    while (page<=3){
//     console.log(`fetching page:${page}`)
//     const response=await fetch(`https://jsonplaceholder.typicode.com/users?_pages=${page}`);
//     const users=await response.json();
//     yield users;//pause the execution after each page
//     page++;
//    }

// };
// (async ()=>{
//    const userGen=fetchUsers();
//    console.log(await userGen.next()) 
//    console.log(await userGen.next()) 
//    console.log(await userGen.next()) 

// })();

//fibanaci series for infinite sequences

function* fibanaci(){
    let a=0,b=1;
    while(true){
        yield a;
        [a,b]=[b,a+b]
        
    }
}
const fib=fibanaci();
for(let i=0;i<20;i++){
    console.log(fib.next().value);
}

//passing values to generator
function* answerAndQuation(){
    const name= yield "what is your name?";
    const age=yield `hello ${name} what is your age?`;
    return `your ${age} years old`

}

const qa=answerAndQuation();
console.log(qa.next("dravid").value)
console.log(qa.next().value)
console.log(qa.next(25).value)

//difference bw normal function and generator function 

// ---------------------------------------------------------------------------------------------------------------
// |FEATURES                     |   NORMAL FUNCTION                  | GENARATOR FUNCTION                        |
// ---------------------------------------------------------------------------------------------------------------
// |1.Execution                  | Runs completlly in a single file   |Runs across multiple frames                |
// ---------------------------------------------------------------------------------------------------------------
// |2.stack usage                |one stack frame                     |multiple stack frames (pause or resumes)   |
// ---------------------------------------------------------------------------------------------------------------
// |3.efficience                 |consumes more memory with large data| memory efficiency due to lazy evaluation  |
// ---------------------------------------------------------------------------------------------------------------
// |4.callstack overflow rsik    |Risk higer for deeper recursions    |lower TCO and iterative approach           |
// ---------------------------------------------------------------------------------------------------------------




