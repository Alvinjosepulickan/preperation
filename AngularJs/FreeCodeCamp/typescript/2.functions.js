"use strict";
const j = (a) => {
    console.log(a);
};
function add(a, b) {
    return a;
}
j(1);
console.log(add(10, 2));
function Opt(a) {
    if (a != undefined) {
        console.log(a);
    }
    else {
        console.log("undefinied");
    }
}
Opt();
Opt(55);
function defa(a = 25) {
    if (a != undefined) {
        console.log(a);
    }
    else {
        console.log("undefinied");
    }
}
defa();
defa(55);
function rest(...a) {
    if (a != undefined) {
        console.log(a);
    }
    else {
        console.log("undefinied");
    }
}
rest();
rest(55);
rest(55, 65);
