using quickkart._2.RelationShip;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._8.MemoryMgmt
{
    public class PersistProductDetails
    {
        public Product Product { get; set; }
        FileStream stream;
        StreamWriter writer;
        static int counter;
        static PersistProductDetails()
        {
            counter = 0;
        }
        public PersistProductDetails(Product product)
        {
            this.Product = product;
            counter += 1;
        }
        public string PersistInTextFile()
        {
            string message = string.Empty;
            string path = @"D:\ProductDetails.txt";

            bool result = File.Exists(path);
            if (result)
            {
                stream = new FileStream(path, FileMode.Open, FileAccess.Write);
                Console.WriteLine("Existing file is opened....");
            }
            else
            {
                stream = new FileStream(path, FileMode.CreateNew, FileAccess.Write);
                Console.WriteLine("New file stream is created....");
            }
            writer = new StreamWriter(stream);
            writer.WriteLine("{0}, {1}, {2}, {3}, {4}",
                 Product.ProductId,
                 Product.ProductName,
                 Product.Price,
                 Product.QuantityAvailable,
                 Product.CategoryId);
            message = "\nProduct details are saved in the file successfully!";
            writer.Flush();
            return message;
        }








        //Destructor
        ~PersistProductDetails()
        {
            Console.WriteLine("Destructor: ~PersistProductDetails {0}", counter);
            writer.WriteLine("Destructor called before releasing the file handler!!");
            writer.Flush();
            writer.Close();
            stream = null;
            writer = null;
            Console.WriteLine("Cleared Unmanaged Objects");
        }



    }
}
