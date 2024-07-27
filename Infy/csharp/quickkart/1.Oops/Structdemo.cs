using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._1.Oops
{
    public struct Structdemo
    {
        static int i;
        public int MyProperty { get; set; }
        public Structdemo()
        {

        }
        public Structdemo(int MyProperty) { 
        }
        public void CheckEqual()
        {
            Console.WriteLine("Equal");
        }

        public static void CheckNotEqual1() {
            var greet = "Hello";
        }
    }
}
