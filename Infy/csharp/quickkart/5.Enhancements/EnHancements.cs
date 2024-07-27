using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._5.Enhancements
{
    public class EnHancements
    {
        public void useVar()
        {
            var j = 1;
        }
        public void useDynamic()
        {
            dynamic j;
            j = 1;
            j = "Hi";
        }
        public void UseInitializer()
        {
            var j = new Obj()
            {
                MyProperty = 1,
                MyProperty1 = 2,
                MyProperty2 = 3
            };
            var p = new List<Obj>()
            {
                new Obj()
                {
                    MyProperty = 1,
                    MyProperty1 = 2,
                    MyProperty2 = 3
                }
                ,
                new Obj()
                {
                    MyProperty = 1,
                    MyProperty1 = 2,
                    MyProperty2 = 3
                }
            };
        }


        public void UseAnonymousType()
        {
            var j = new
            {
                Name = "Hi",
                Age = 10
            };
            var people = new List<object>
            {
                new { Name = "Alice", Age = 30 },
                new { Name = "Bob", Age = 25 },
                new { Name = "Charlie", Age = 35 }
            };
            foreach (var person in people)
            {
                // Access properties using dynamic typing
                var name = person.GetType().GetProperty("Name").GetValue(person);
                var age = person.GetType().GetProperty("Age").GetValue(person);

                Console.WriteLine($"Name: {name}, Age: {age}");
            }
        }

    }
    public class Obj
    {
        public int MyProperty { get; set; }
        public int MyProperty1 { get; set; }
        public int MyProperty2 { get; set; }
    }

}
