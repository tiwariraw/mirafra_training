// Decision making (if,else,if else,switch,nested if) -we dont have continue in switch

// Loops (for,while)
let i=0
while(i<5)
{
    i++
}
for(let j=0;j<10;j++)
{
console.log(j)
}
var k=0
do{
console.log(k)
k++;
} while(k<14)

// for in,for of,.every(),.some(),.map(),.reduce(),for await
let obj={
    name:"abc",
    age:"12"
}
for(let key in obj )
{
    console.log("key is",key)
    console.log("value is",obj[key])
}
let arr=[4,3,12,10]
for(let value of arr)
{
    console.log("array values are",value)
}

