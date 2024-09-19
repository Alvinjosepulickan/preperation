let lname:string;
lname='Santosh';
let newName=lname.toUpperCase();
console.log(newName);


let age:number=10;

let isValid:boolean=false;

let arr1:(number|string)[]=[1,2,3,4,5];
let arr:(number)[]=[1,2,3,4,5];
arr=arr.filter(x=>x>4);

enum gender{
    Male,
    Female
}
let genderValue=gender.Male;
console.log(gender);
console.log(genderValue);



let tuple:[string,string,number];
tuple=["hi","hello",1];
console.log(tuple);

let anyVariable:any;
anyVariable=10;
anyVariable='hi';