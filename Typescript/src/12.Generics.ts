function identity<T>(arg: T): T {
    return arg;
}

// Usage
let output = identity<string>("hello");
// output is of type 'string'

let output2 = identity<number>(42);
// output2 is of type 'number'








interface Pair<T, U> {
    first: T;
    second: U;
}

// Usage
let pair: Pair<number, string> = { first: 1, second: "two" };












interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Usage
loggingIdentity({ length: 10, value: 3 });















// Define a generic interface
interface MyGenericInterface<T> {
    value: T;
    getValue(): T;
}

// Define a generic class that implements the interface
class MyClass<T> implements MyGenericInterface<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    // Additional methods and properties can be added here
}

// Example usage:
let instance1 = new MyClass<number>(42);
console.log(instance1.getValue());  // Output: 42

let instance2 = new MyClass<string>("Hello, TypeScript!");
console.log(instance2.getValue());  // Output: Hello, TypeScript!
