// See https://aka.ms/new-console-template for more information
using quickkart._1.Oops;
using quickkart._3.dynamic_polymorphism;
using System.Collections;

Console.WriteLine("Hello, World!");

//var customer = new Customer()
//{
//    Id = 1,
//    Name = "Joe",
//    Email = "Joe@gmail.com",
//    Address = "Address",
//    Phone = 123456789
//};

//var customer2 = customer;
//customer = null;



//var structObj= new Structdemo();
//structObj.CheckEqual();
//structObj= new Structdemo(1);
//structObj.CheckEqual();




////refandout
//var refandOut1 = new refandout();
//var refObj = 0;
//int outObj;
//var p = refandOut1.Method(1, 2,ref refObj,out outObj,out outObj);
//Console.WriteLine(p);
//Console.WriteLine(refObj);
//Console.WriteLine(outObj);




////polymorphism
//var poly = new Polymorphism();
//poly.AddProducts(20, 10);



// dynamic polymorphism
//Class1 class1obj= new Class2();
//class1obj.CheckEquals(1, 1);
//class1obj.CheckEquals1(1, 1);
//class1obj.CheckEquals2(1, 1);


//Class2 class2obj= new Class2();
//class2obj.CheckEquals(1, 1);
//class2obj.CheckEquals1(1, 1);
//class2obj.CheckEquals2(1, 1);

var j = 1;






// collection
// non generic
var p = new ArrayList();
p.Add(1);
p.Add("hi");
foreach(var n in p)
{

}
//generic
var list = new List<int>();
var dict= new Dictionary<int, int>();

foreach(var n in dict)
{
}
var sortedList = new SortedList<int,int>();