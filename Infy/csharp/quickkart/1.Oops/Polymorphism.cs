using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._1.Oops
{
    public class Polymorphism
    {
        public void AddProducts(int qty, int categoryId)
        {
            Console.WriteLine("Int-Int");
        }
        public void AddProducts(int qty, double price)
        {
            Console.WriteLine("Int-Double");
        }
    }
}
