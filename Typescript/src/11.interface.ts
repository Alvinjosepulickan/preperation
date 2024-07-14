interface IPerson{
    name: string;
    dob: Date;
    email: string;
    getAge():number;
    getName():string;
    greetperson(message:string):void;
}

class Person implements IPerson{
    name: string;
    dob: Date= new Date(1997, 7, 12);
    email: string;
    constructor(name: string,email: string)
    {
        this.name=name;
        this.email=email;
        this.dob
    }
    public getAge(): number {
        return Date.now()-Number(this.dob);
    }
    public getName(): string {
        return this.name;
    }
    public greetperson(message: string): void {
        console.log(`${message} + ${this.name}`)
    }
}

let person= new Person("Ramu","ramu@123");
console.log(person.getName());
console.log(person.getAge());
person.greetperson(`Your age is ${person.getAge()}`);