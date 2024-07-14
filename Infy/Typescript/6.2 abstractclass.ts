// Abstract class
abstract class car {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;

    // Concrete method
    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

// Concrete subclass extending Animal
class maruti extends car {
    constructor(name: string) {
        super(name);
    }

    // Implementing the abstract method
    makeSound(): void {
        console.log('Dog barks!');
    }
}

// Concrete subclass extending Animal
class mahindra extends car {
    constructor(name: string) {
        super(name);
    }

    // Implementing the abstract method
    makeSound(): void {
        console.log('Cat meows!');
    }
}

// Using the classes
let marutiCar = new maruti('Buddy');
let mahindraCar = new mahindra('Whiskers');

marutiCar.makeSound(); // Outputs: Dog barks!
marutiCar.move(10);    // Outputs: Buddy moved 10 meters

mahindraCar.makeSound(); // Outputs: Cat meows!
mahindraCar.move(5);     // Outputs: Whiskers moved 5 meters

// Trying to instantiate the abstract class directly results in a TypeScript compile-time error:
// let myAnimal = new Anim
