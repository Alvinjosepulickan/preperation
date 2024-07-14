"use strict";
class Person {
    constructor(name, email) {
        this.dob = new Date(1997, 7, 12);
        this.name = name;
        this.email = email;
        this.dob;
    }
    getAge() {
        return Date.now() - Number(this.dob);
    }
    getName() {
        return this.name;
    }
    greetperson(message) {
        console.log(`${message} + ${this.name}`);
    }
}
let person = new Person("Ramu", "ramu@123");
console.log(person.getName());
console.log(person.getAge());
person.greetperson(`Your age is ${person.getAge()}`);
