// Exporting a function
export function greet(name) {
    return `Hello, ${name}!`;
}
// Exporting a class
export class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
