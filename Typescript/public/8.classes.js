"use strict";
class Box {
    constructor(obj) {
        var _a, _b, _c, _d;
        this.x = (_a = obj === null || obj === void 0 ? void 0 : obj.x) !== null && _a !== void 0 ? _a : 0;
        this.y = (_b = obj === null || obj === void 0 ? void 0 : obj.y) !== null && _b !== void 0 ? _b : 0;
        this.height = (_c = obj === null || obj === void 0 ? void 0 : obj.height) !== null && _c !== void 0 ? _c : 0;
        this.width = (_d = obj === null || obj === void 0 ? void 0 : obj.width) !== null && _d !== void 0 ? _d : 0;
    }
}
// Base class
class Animal {
    sound() {
        console.log('Animal makes a sound');
    }
}
// Derived class overriding the sound method
class Dog extends Animal {
    sound() {
        console.log('Dog barks');
        super.sound();
    }
}
// Usage
let animal = new Animal();
animal.sound(); // Output: Animal makes a sound
let dog = new Dog();
dog.sound(); // Output: Dog barks (override behavior)
