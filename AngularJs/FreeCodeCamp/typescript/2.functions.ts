const j=<T>(a:T)=>{
    console.log(a);
}

function add<T>(a: T,b:T):T{
    return a;
}
j<number>(1);
console.log(add<number>(10,2));


function Opt(a?:number):void
{
    if(a!=undefined)
    {
        console.log(a);
    }
    else{
        console.log("undefinied");
    }
}
Opt();
Opt(55);

function defa(a:number=25):void
{
    if(a!=undefined)
    {
        console.log(a);
    }
    else{
        console.log("undefinied");
    }
}
defa();
defa(55);


function rest(...a:number[]):void
{
    if(a!=undefined)
    {
        console.log(a);
    }
    else{
        console.log("undefinied");
    }
}
rest();
rest(55);
rest(55,65);