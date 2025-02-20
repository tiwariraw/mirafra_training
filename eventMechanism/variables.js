var a = 10 //number
var name="shreya" //string
var value=true //boolean
var val=null //void
var obj={
id:"1",
value:{
    name:"abc"
}
}//Object -unstructured
var b  //undefined
var arr=[1,2,3,4] //Array -structured


//Scope of variables
 var name="Deepthi"// var is Global scoped 
 //Functional scope or local scope
 function display()
{
    // var name lexical scope
    console.log(name)
}
display()
console.log(name)

//BLOCK scoped

{
    let data="test"
    console.log(data)
}
// console.log(data)
{
    const newVal="testing" //initialized at the time of declaration
}

//Variable Hoisting
console.log(currVal)
var currVal=10
console.log(currVal)
console.log(value1)
let value1="lethoisting"

function display2(){
    var name2="anita"
}




