using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._9.Linq
{
    public class Main
    {
        public void Demo()
        {
            List<Category> categoryList = new List<Category>()
         {
            new Category { CategoryName = "Sports" },
            new Category { CategoryName = "Furniture" },
            new Category { CategoryName = "Apparels" }
         };
            List<Product> productList = new List<Product>()
          {
             new Product { ProductName="Tennis Racket", Price=1099.99, QuantityAvailable=50, CategoryId=1 },
             new Product { ProductName="Tennis Ball", Price=300.00, QuantityAvailable=100, CategoryId=1 },
             new Product { ProductName="Dining Table", Price=15000, QuantityAvailable=10, CategoryId=2 },
             new Product { ProductName="Laptop Table", Price=7000.00, QuantityAvailable=15, CategoryId=2 },
             new Product { ProductName="Corduroy Shirt", Price=2000, QuantityAvailable=100, CategoryId=3 },
             new Product { ProductName="Tweed Shirt", Price=2500, QuantityAvailable=100, CategoryId=3 }
           };

            #region query syntax
            var allproductsName =from product in productList
                                select product.ProductName;

            var allproductsWithCategoryId1 = from product in productList
                                             where product.CategoryId == 1
                                             select product.ProductName;




            var productListWithPrice = (from product in productList
                                        select new { name = product.ProductName, price = product.Price }).ToList();
            foreach(var product in productListWithPrice)
            {
                Console.WriteLine(product.price);
                Console.WriteLine(product.name);
            }


            var productpriceFilter = (from product in productList
                                      where product.Price > 1000
                                      select new { Name = product.ProductName, Price = product.Price });

            var productpriceFilter1 = (from product in productList
                                      where product.Price > 1000
                                      select new Product(){ ProductName = product.ProductName, Price = product.Price });



            //joins andgroup by

            var productTotalQuantity = from product in productList
                                       join category in categoryList
                                       on product.CategoryId equals category.CategoryId
                                       group product by product.CategoryId
                           into g
                                       orderby g.Sum(p => p.QuantityAvailable) ascending
                                       select new { g.Key, Total = g.Sum(p => p.QuantityAvailable) };
            #endregion


            #region method syntax

            var productListWithPriceFilter = productList.Where(x => x.Price > 1000);

            var productListWithPriceFilter1= productList.Where(p => p.Price > 1000).Select(x => new Product() { Price = x.Price });
            var productListWithPriceFilter2 = productList.Where(p => p.Price > 1000).Select(x => x.Price);
            #endregion
        }
    }
}
