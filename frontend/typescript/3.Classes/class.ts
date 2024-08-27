class Shape {
    // Method signatures
    draw(x: number, y: number): void;
    draw(x: number, y: number, color: string): void;
    draw(x: number, y: number, color?: string): void {
        if (color !== undefined) {
            console.log(`base Drawing at (${x}, ${y}) with color ${color}`);
        } else {
            console.log(`base Drawing at (${x}, ${y}) with default color`);
        }
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Method signatures
    draw(x: number, y: number): void;
    draw(x: number, y: number, color: string): void;
    draw(x: number, y: number, color?: string): void {
        // Override the base class method
        if (color !== undefined) {
            console.log(`Drawing a circle at (${x}, ${y}) with radius ${this.radius} and color ${color}`);
            super.draw(x,y);
        } else {
            console.log(`Drawing a circle at (${x}, ${y}) with radius ${this.radius} and default color`);
        }
    }
}

const shape = new Shape();
shape.draw(10, 20); // Output: Drawing at (10, 20) with default color
shape.draw(10, 20, 'red'); // Output: Drawing at (10, 20) with color red

const circle = new Circle(5);
circle.draw(15, 25); // Output: Drawing a circle at (15, 25) with radius 5 and default color
circle.draw(15, 25, 'blue'); // Output: Drawing a circle at (15, 25) with radius 5 and color blue
