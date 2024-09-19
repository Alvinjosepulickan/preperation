/*
Logical && and Logical OR  && ||
Template Literals
Object and array destructuring
default parameters
spread operators
rest parameter
ES6 method: Map, Filter, find, Some , every, findindex
async await
*/

// logical && and ||
let j=1;
let k=0;
function getName(name)
{
    return name;
}
if(j && k)
{
    console.log("logical and");
}
if(j || k)
{
    console.log("logical OR");
}
console.log(j&& getName("Shibu"));

//template literal
console.log(`${j} ${k}`)


//ternary operator
 console.log(j? 'true': 'false')




//object and array destrucuring
const arr = [1, 2, 3, 4];
const [a, ...b] = arr;

console.log(`first is ${a}, rest is ${b}`);
const name="peter";
const age= 10
let obj={
    name,
    age
}
console.log(`name is ${name} and age is ${age}`);


const product={
    description: "description",
    name1:"name"
}
const {description,name1}=product;
console.log(`description is ${description} and name is ${name1}`);




//default, spread and rest parameters
function Add(a=10,b=5)
{
    console.log(`Default sum ${a+b}`);
}
Add();

function add1(a, b, c) {
    return console.log(` Spread sum ${a + b + c}`);
}
const numbers = [1, 2, 3];
add1(...numbers);

function add2(a, b) {
    let sum=a
    b.forEach(element => {
        sum+=element;
    });
    return console.log(` rest sum ${sum}`);
}
const numberz = [1, 2, 3];
const [a1, ...b1]= numberz
add2(a1,b1);




//Map, Filter, find, Some , every, findindex
const person=[
    {
        name:'Ravi',
        age: 20,
        country:"India"
    },
    {
        name:'Peter',
        age: 30,
        country:"Uk"
    },
    {
        name:'Simon',
        age: 25,
        country:"US"
    },
    {
        name:'Rober',
        age: 40,
        country:"Russia"
    }
]

//map
const getAllName=person.map(x=>x.name);
console.log(getAllName);
const nameAndCountry = person.map(item => ({
    name: item.name,
    country: item.country
  }));
  
console.log(nameAndCountry);

//filter
const ageGreaterthen40=person.filter(x=>x.age>=30);
console.log(ageGreaterthen40);

//find
const ageGreaterthen40find=person.find(x=>x.age>=30);
console.log(ageGreaterthen40find);
//some-> return true if any element in array satisfy the condition
//every-> return true if evry element in array satisfy the condition
//include-> return true if element exists in array
//indexof-> return index of element in array