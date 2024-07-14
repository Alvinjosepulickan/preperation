let num:number=10;
let str: string="hello world";
let bool: boolean=true;


//array
let arr:number[]=[1,2,3,4];
let arr1:string[]=["hi","hello"];

let numb: string|number;

//function which takes 2 numbers and return number
const func=(a: number,b:number):number=>{
    return a+b;
}

console.log(func(num, num));



const cir=(radius: number):number=>{
    return 3.14*radius* radius;
}

console.log("Perimeter is : " +cir(10));