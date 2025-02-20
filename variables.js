var a=10;
console.log(a); 

// scope of variables

// global scope

// functional scope or local scope
var name="yarra";
function display(){
     //lexical scope
    console.log(name)

}
display();
// console.log(name)

//BLOCK SCOPE
{
    let data="sdfsd"
    console.log(data,"inside a block");
}
console.log(data)
{
    const  newVal="testing";//initilized at the time of diclaration
}

//HOISTING 


