var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Function is defined with parameter of number type and string as return type
function getProductDetails(productId) {
    return "Product ID" + productId;
}
//Invoking function using string parameter type,throws compilation error saying "Argument of type 'string' is not assignable to parameter of type 'number'"
console.log(getProductDetails(100)); //Error
var fun = function (n) {
    return n * 2;
};
console.log(fun(2));
var addFunc = function (a, b) {
    return a + b;
};
//optional parameter
//Adding ? after parameter name makes parameter , optional
function optional(productName, productId) {
    return "Product: " + productName + " " + productId;
}
var productName = optional("Mobile");
console.log(productName);
//Clothing is assigned as deafult value to productName parameter
function defaultVlaue(productName, productId) {
    if (productName === void 0) { productName = "Clothing"; }
    return "Product: " + productName + " " + productId;
}
//Access function without default parameter, throws compilation error: "Expected 2 arguments, but got 1."
//let productName1: string = defaultVlaue(101);//Error
//Pass undefined as value for default parameter.Since we have already set default value for the same, function takes that value to process the same.
var productName2 = defaultVlaue(undefined, 101);
console.log(productName2);
//Preceding parameter with triple dots makes it a rest parameter. Rest parameter by default will have array type declaration
function restParams(productId) {
    var productName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        productName[_i - 1] = arguments[_i];
    }
    productName.forEach(function (x) { return console.log(x); });
    console.log("Product: " + productName + " " + productId);
}
var j = ["Mobile", "Furniture"];
//We can pass number of values for the Rest parameter or even leave it //empty
restParams.apply(void 0, __spreadArray([101], j, false));
