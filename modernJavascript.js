// Arrays methods :concat,push,pop,shift,unshift,slice,splice,map,filter,reduce

//concat: Join one or more arrays and return new array
const arr1=[1,2,3,4]
const arr2=[5,6,7]
const result= arr1.concat(arr2);
console.log(result)

//every method

// syntax : arr.every(cb(thisObj))

const ages=[10,20,30,40];

function isBig(elem,index){
    return elem>=20
}
// (()=>{

// })();



var everyResult=ages.every(isBig);
console.log(everyResult)
//try every with index positions


//filter 
// syntax:arr.filter(cb(elm,index))

const result1=ages.filter(age=>age>20);
console.log(result1)

//forEach :
// syntax: arr.forEach(cb(elm,index))
function sumOfAll(elm,index){
    console.log(elm)
}
const result2=ages.forEach(sumOfAll);

//map
// syntax : arr.map(cb(elm,index));

const result3=arr1.map(age=>age+5);
console.log(result3);

//reverse
// syntax: arr.reverse()
console.log(result3.reverse())

//reducer
// syntax :arr.reduce(cb(acc,curr,index,arr),initialvalue);

const arr3=[[1,2],[3,4],[5,6]];
const result4=arr3.reduce((acc,curr)=>acc.concat(curr),[]);
console.log(result4)

//indexOf

// syntax: indexOf
const fruits=['apple','banana','grapes'];
let index=fruits.indexOf('');
console.log(index);

//join, splice,split,slice,lastIndexOf,push,pop,reduceRight,shift,unshift,some,sort,toString,find


// array destructuring
let arrayDestruct=[1,2,3,4];
var [w,x,y,z]=arrayDestruct;
console.log(x,y)