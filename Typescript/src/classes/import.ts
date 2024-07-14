// Importing named exports
import { greet, Person } from './export';

console.log(greet('Alice')); // Outputs: Hello, Alice!

const person = new Person('Bob');
console.log(person.greet()); // Outputs: Hello, my name is Bob.
