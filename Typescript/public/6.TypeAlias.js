"use strict";
let getName = (name) => {
    console.log(name);
};
getName(1);
getName("Hello");
const greetUser = (user) => {
    console.log("hello " + user.name);
};
greetUser({ name: "Ali", age: 10 });
