//Function is defined with parameter of number type and string as return type
function getProductDetails(productId: number): string {
    return "Product ID" + productId;
}
//Invoking function using string parameter type,throws compilation error saying "Argument of type 'string' is not assignable to parameter of type 'number'"
console.log(getProductDetails(100)); //Error


const fun=(n:number):number=>{
    return n*2;
}
console.log(fun(2));


const addFunc=(a:number,b:number):number=>{
    return a+b;
}



//optional parameter
//Adding ? after parameter name makes parameter , optional
function optional(productName: string, productId?: number): string {
    return "Product: " + productName + " " + productId;
}
let productName: string = optional("Mobile");
console.log(productName);


//Clothing is assigned as deafult value to productName parameter
function defaultVlaue(productName: string = "Clothing", productId: number): string {
    return "Product: " + productName + " " + productId;
}
//Access function without default parameter, throws compilation error: "Expected 2 arguments, but got 1."
//let productName1: string = defaultVlaue(101);//Error
//Pass undefined as value for default parameter.Since we have already set default value for the same, function takes that value to process the same.
let productName2: string = defaultVlaue(undefined, 101);
console.log(productName2);



//Preceding parameter with triple dots makes it a rest parameter. Rest parameter by default will have array type declaration
function restParams(productId: number, ...productName: string[]) {
    productName.forEach(x=>console.log(x));
    console.log("Product: " + productName + " " + productId);
}
let j=["Mobile", "Furniture"]
//We can pass number of values for the Rest parameter or even leave it //empty
restParams(101, ...j);
