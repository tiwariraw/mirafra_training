function outer(){
    let counter=0;
    return function inner(){
        counter++;
        console.log(counter)
    }
    
}
const increement=outer();
increement();
increement();
increement();
increement();

