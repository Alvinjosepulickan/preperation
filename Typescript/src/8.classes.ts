interface IBox {    
    x: number;
    y: number;
    height: number;
    width: number;
}
    
class Box {
    public x: number;
    public y: number;
    public height: number;
    public width: number;

    constructor();
    constructor(obj: IBox); 
    constructor(obj?: IBox) {    
        this.x = obj?.x ?? 0;
        this.y = obj?.y ?? 0;
        this.height = obj?.height ?? 0;
        this.width = obj?.width ?? 0;
    }   
}




// Base class
class Animal {
    sound(): void {
        console.log('Animal makes a sound');
    }
}

// Derived class overriding the sound method
class Dog extends Animal {
    sound(): void {
        console.log('Dog barks');
        super.sound()
    }
}

// Usage
let animal: Animal = new Animal();
animal.sound(); // Output: Animal makes a sound

let dog: Animal = new Dog();
dog.sound(); // Output: Dog barks (override behavior)
