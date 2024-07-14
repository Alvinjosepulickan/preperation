var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    // Encapsulated property access
    Animal.prototype.getName = function () {
        return this.name;
    };
    // Polymorphic method
    Animal.prototype.makeSound = function () {
        console.log('Animal makes a sound');
    };
    return Animal;
}());
// Child class inheriting from Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    // Overriding parent method
    Dog.prototype.makeSound = function () {
        console.log('Dog barks!');
    };
    // Additional method specific to Dog class
    Dog.prototype.wagTail = function () {
        console.log('Tail wagging!');
    };
    return Dog;
}(Animal));
// Child class inheriting from Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, color) {
        var _this = _super.call(this, name, age) || this;
        _this.color = color;
        return _this;
    }
    // Overriding parent method
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
        console.log('Cat meows!');
    };
    // Additional method specific to Cat class
    Cat.prototype.purr = function () {
        console.log('Purrr...');
    };
    return Cat;
}(Animal));
// Using the classes
var myDog = new Dog('Buddy', 5, 'Labrador');
var myCat = new Cat('Whiskers', 3, 'Gray');
console.log("Dog name: ".concat(myDog.getName()));
console.log("Cat name: ".concat(myCat.getName()));
myDog.makeSound(); // Outputs: Dog barks!
myCat.makeSound(); // Outputs: Cat meows!
myDog.wagTail(); // Outputs: Tail wagging!
myCat.purr(); // Outputs: Purrr...
