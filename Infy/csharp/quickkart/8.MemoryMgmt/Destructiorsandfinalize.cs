using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._8.MemoryMgmt
{
    public class Destructiorsandfinalize
    {

        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public double Price { get; set; }
        public int QuantityAvailable { get; set; }
        public int CategoryId { get; set; }
        static int counter;
        static Destructiorsandfinalize()
        {
            counter = 1000;
        }
        public Destructiorsandfinalize()
        {
            ProductId = "P" + (++counter);
        }
        public Destructiorsandfinalize(string productName, double price, int quantityAvailable, int categoryId) : this()
        {
            ProductName = productName;
            Price = price;
            QuantityAvailable = quantityAvailable;
            CategoryId = categoryId;
            Console.WriteLine("An instance of Product class is created.");
        }
        //destructiors or finalizers
        ~Destructiorsandfinalize() { 
            GC.Collect();
        }


        //usinf finaize
    }
}
