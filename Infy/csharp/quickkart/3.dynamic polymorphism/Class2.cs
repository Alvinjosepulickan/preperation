using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._3.dynamic_polymorphism
{
    public class Class2:Class1
    {
        public override void CheckEquals(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals child");
            }

            Console.WriteLine("Not Equal from CheckEquals child");
        }
        public new void CheckEquals1(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals1 child");
            }

            Console.WriteLine("Not Equal from CheckEquals1 child");
        }
        public void CheckEquals2(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals2 child");
            }

            Console.WriteLine("Not Equal from CheckEquals2 child");
        }
    }
}
