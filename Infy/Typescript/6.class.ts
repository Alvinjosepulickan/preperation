// Parent class
class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Encapsulated property access
    getName(): string {
        return this.name;
    }

    // Polymorphic method
    makeSound(): void {
        console.log('Animal makes a sound');
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    // Overriding parent method
    makeSound(): void {
        console.log('Dog barks!');
    }

    // Additional method specific to Dog class
    wagTail(): void {
        console.log('Tail wagging!');
    }
}

// Child class inheriting from Animal
class Cat extends Animal {
    private color: string;

    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    // Overriding parent method
    makeSound(): void {
        super.makeSound();
        console.log('Cat meows!');
    }

    // Additional method specific to Cat class
    purr(): void {
        console.log('Purrr...');
    }
}

// Using the classes
let myDog = new Dog('Buddy', 5, 'Labrador');
let myCat = new Cat('Whiskers', 3, 'Gray');

console.log(`Dog name: ${myDog.getName()}`);
console.log(`Cat name: ${myCat.getName()}`);

myDog.makeSound(); // Outputs: Dog barks!
myCat.makeSound(); // Outputs: Cat meows!

myDog.wagTail();   // Outputs: Tail wagging!
myCat.purr();      // Outputs: Purrr...
