// Exporting a function
export function greet(name: string) {
    return `Hello, ${name}!`;
}

// Exporting a class
export class Person {
    constructor(private name: string) {}
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
