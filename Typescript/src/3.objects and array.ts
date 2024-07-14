//array
let names: (string|number)[]=["hi","hello","how","are","you",1];
names.push("jai");
let popVal: string|number|undefined=names.pop();
names[0]="pappi";



//objects
let obj={
    name:"bla",
    age:25
}
/* Exception if property dont match
obj={
    name:"bla",
    age:25,
    location:"somewhere"
}
*/

let obj1:object;
obj1={
    name:"bla",
    age:25
}
obj1={
    name:"bla",
    age:25,
    location:"somewhere"
}