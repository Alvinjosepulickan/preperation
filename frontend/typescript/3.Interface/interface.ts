interface Person {
    name: string;
    age: number;
    empId:number;
    greet(): void;
}
interface Sample
{
    age1:number
}
class Employee implements Person ,Sample{
    static EmployeeId=10;
    name: string;
    age: number;
    age1:number;
    empId: number;
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        Employee.EmployeeId++
        this.empId=Employee.EmployeeId
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and EmpId is ${this.empId}.`);
    }
}

let emp= new Employee('Peter', 10,'SSE')
emp.greet();
let emp1= new Employee('Peter', 10,'SSE')
emp1.greet();



//duck typing
interface Product {
    productId: number;
    productName: string;
}
function getProductDetails(productobj: Product): string {
    return 'The product name is : ' + productobj.productName;
}
//Incorrect way of using the interface duck type
let prodObject1 = { productId: 1001,productName: 'Mobile', productCategory: 'Gadget' ,Name:'Hi'};
console.log(getProductDetails(prodObject1));
//Correct way of using the interface duck type by adding an additional property productCategory to demonstrate DuckTyping
let prodObject2 = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget' };
console.log(getProductDetails(prodObject2));





interface Category {
    categoryName: string;
}
interface Product {
    productName: string;
    productId: number;
}
interface productList extends Category, Product {
    list: Array<string>;
}
let productDetails: productList = {
    categoryName: 'Gadget',
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung', 'Motorola', 'LG']
}
