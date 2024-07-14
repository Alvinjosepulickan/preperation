let greet=()=>{
    console.log("hello world");
}
// ? for optional parameter and = for setting default value cannot use both
let add=(a?:number,b:number=10):number=>{
    if(a){
        return a+b;
    }
    return 0;
}
greet();
console.log(add(25,11.5));

console.log(add(25));
console.log(add());