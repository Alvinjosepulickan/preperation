class Person {
    private _name: string;
    private _age: number;

    // Constructor signatures
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(nameOrAge: string | number, age?: number) {
        if (typeof nameOrAge === 'string') {
            this._name = nameOrAge;
            this._age = age || 0; // default age if not provided
        } else {
            this._name = 'Unknown'; // default name if not provided
            this._age = nameOrAge;
        }
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(value: string) {
        this._name = value;
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(value: number) {
        if (value >= 0) { // Simple validation
            this._age = value;
        } else {
            console.error('Age must be a non-negative number.');
        }
    }

    // Display information
    displayInfo(): void {
        console.log(`Name: ${this._name}, Age: ${this._age}`);
    }
}

// Usage
const person1 = new Person('John');
person1.displayInfo(); // Name: John, Age: 0

const person2 = new Person(30);
person2.displayInfo(); // Name: Unknown, Age: 30

const person3 = new Person('Alice', 25);
person3.displayInfo(); // Name: Alice, Age: 25

// Using setters
person3.name = 'Bob';
person3.age = 32;
person3.displayInfo(); // Name: Bob, Age: 32

// Using getter
console.log(person3.name); // Bob
console.log(person3.age);  // 32

// Attempting to set invalid age
person3.age = -5; // Age must be a non-negative number.
