using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._3.dynamic_polymorphism
{
    public class Class1
    {
        public virtual void CheckEquals(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals base");
            }

            Console.WriteLine("Not Equal from CheckEquals base");
        }
        public void CheckEquals1(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals1 base");
            }

            Console.WriteLine("Not Equal from CheckEquals1 base");
        }
        public void CheckEquals2(int a, int b)
        {
            if (a == b)
            {
                Console.WriteLine("Equal from CheckEquals2 base");
            }

            Console.WriteLine("Not Equal from CheckEquals2 base");
        }
    }
}
