interface interfaceName{
    age:number;
    name:string;
    display(a:number);
}

class service implements interfaceName{
    /**
     *
     */
    age:number;
    name: string;
    constructor() {
        this.age=10
        this.name='Babu'
    }
    public display(a: number) {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }

}
let j= new service();
j.display(1);