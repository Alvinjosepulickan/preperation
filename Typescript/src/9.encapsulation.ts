class Car {
    public brand: string;  // Public property
    private mileage: number;  // Private property
    readonly vin: string="hello";  // Readonly property
    public constructor(brand: string, milage: number,vin: string) {
        this.brand = brand;
        this.mileage = milage;
        this.vin = vin;
    }
    public honk(): void {  // Public method
        console.log('Honk honk!');
    }
    private drive(distance: number): void {  // Private method
        this.mileage += distance;
    }
    public logMileage(): void {
        console.log(`Total mileage: ${this.mileage}`);
        // Can access private property and method internally
    }
}

let myCar = new Car('Toyota',10,'ABC123');
console.log(myCar);  // Accessing public property
myCar.honk();  // Calling public method
myCar.logMileage();// Accessing public method which accesses private members
// myCar.mileage; // Error: Property 'mileage' is private and only accessible within class 'Car'
// myCar.drive(100); // Error: Property 'drive' is private and only accessible within class 'Car'