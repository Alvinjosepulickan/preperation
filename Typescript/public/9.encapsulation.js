"use strict";
class Car {
    constructor(brand, milage, vin) {
        this.vin = "hello"; // Readonly property
        this.brand = brand;
        this.mileage = milage;
        this.vin = vin;
    }
    honk() {
        console.log('Honk honk!');
    }
    drive(distance) {
        this.mileage += distance;
    }
    logMileage() {
        console.log(`Total mileage: ${this.mileage}`);
        // Can access private property and method internally
    }
}
let myCar = new Car('Toyota', 10, 'ABC123');
console.log(myCar); // Accessing public property
myCar.honk(); // Calling public method
myCar.logMileage(); // Accessing public method which accesses private members
// myCar.mileage; // Error: Property 'mileage' is private and only accessible within class 'Car'
// myCar.drive(100); // Error: Property 'drive' is private and only accessible within class 'Car'
