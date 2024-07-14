class MathUtils {
    // Static property
    /**
     *
     */
    private constructor() {
    }
    static PI: number = 3.14159;

    // Static method
    public static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

// Accessing static members
console.log(MathUtils.PI); // Outputs: 3.14159
console.log(MathUtils.circleArea(5)); // Outputs: 78.53975
