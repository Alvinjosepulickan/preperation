function add(a, b) {
    return a + b;
}
var addNumber = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
console.log(addNumber(5, 7));
//optional parameter
var addNumber1 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(addNumber1(10, 20));
console.log(addNumber1(10));
var addNumber2 = function (a, b) {
    if (b) {
        return a + b;
    }
    return a;
};
console.log(addNumber2(10, 20));
console.log(addNumber2(10));
