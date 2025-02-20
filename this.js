//different types of binding
//1.implicit binding 
const obj={
    name:"rahul",
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}
obj.greet();
//2.explicit binding 
// call 
function display(){
    console.log(`hello my name is:${this.name}`)
}
const person={
    name:"virat"
}
display.call(person)
//calls the function immediatly passing the object as a this 

//apply
function display1(arg1,arg2){
    console.log(`hello my name is:${this.name} ${arg1} ${arg2}`)
}
const person1={
    name:"virat"
}
display1.apply(person,["kohli","abc"])

//bind
function display2(){
    console.log(`hello my name is:${this.name}`)
}
const person2={
    name:"virat"
}
const binding=display2.bind(person);
binding()
//returs any function this perminently sets to the specified object

//3.new binding
function Person(name,age){
this.name=name
this.age=age
this.greet=function(){
    console.log("my name is",this.name,"and age is:",this.age)
}
}
const person3=new Person("maxi",36)
person3.greet();
//here this refers to new object

//4.Arrow functions

let person4={
    name:"wwe",
    greet:function(){
     const innerFun=()=>{
        console.log("hello",this.name)
     }
     innerFun();
    }
}

person4.greet();
//here this.name refers to person4 name object because of arraow function 