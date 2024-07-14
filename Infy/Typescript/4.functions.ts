function add(a:number,b:number):number{
    return a+b;
}
var addNumber=(a:number,b:number):number=>{
    return a+b;
}
console.log(add(1,2));
console.log(addNumber(5,7));





//optional parameter
var addNumber1=(a:number,b:number=10):number=>{
    return a+b;
}
console.log(addNumber1(10,20));
console.log(addNumber1(10));



var addNumber2=(a:number,b?:number):number=>{
    if(b){
        return a+b;
    }
    return a;
}
console.log(addNumber2(10,20));
console.log(addNumber2(10));