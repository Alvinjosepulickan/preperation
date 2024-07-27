using quickkart._1.Oops;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._2.RelationShip._3._Inheritance_or_IS_A
{
    public class RegularCustomer:Customer
    {

        public int DiscountPercentage { get; set; }
        public RegularCustomer()
        {
            CustomerId = 10;
        }
    }

}
