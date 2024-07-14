type StringorNum =string|Number
type userObject={name: string,age:number}

let getName=(name : StringorNum)=>{
    console.log(name);
}

getName(1);
getName("Hello");


const greetUser=(user:userObject)=>{
    console.log("hello "+user.name)
}
greetUser({name:"Ali",age:10});