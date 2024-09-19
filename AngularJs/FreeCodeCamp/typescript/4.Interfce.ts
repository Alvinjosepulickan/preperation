interface Person1{
    name:string;
    age:number;
    getName():string;
    getAge():void;
}
class Human implements Person1{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): void {
        console.log(this.age);
    }

}