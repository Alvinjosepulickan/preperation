"use strict";
//array
let names = ["hi", "hello", "how", "are", "you", 1];
names.push("jai");
let popVal = names.pop();
names[0] = "pappi";
//objects
let obj = {
    name: "bla",
    age: 25
};
/* Exception if property dont match
obj={
    name:"bla",
    age:25,
    location:"somewhere"
}
*/
let obj1;
obj1 = {
    name: "bla",
    age: 25
};
obj1 = {
    name: "bla",
    age: 25,
    location: "somewhere"
};
