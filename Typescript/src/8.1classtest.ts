// Function overloading example with different numbers of parameters
function display(name: string): void; // Signature 1
function display(name: string, age: number): void; // Signature 2

// Implementation handling different signatures
function display(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}`);
    }
}

// Usage of the overloaded function
display("Alice"); // Output: Name: Alice
display("Bob", 30); // Output: Name: Bob, Age: 30
// display(25); // Error: Expected 1-2 arguments, but got 1.

// Additional usage with one parameter, demonstrating different behavior based on the signature matched
let name1: string = "Charlie";
let age: number = 25;
display(name1); // Output: Name: Charlie
display(name1, age); // Output: Name: Charlie, Age: 25
