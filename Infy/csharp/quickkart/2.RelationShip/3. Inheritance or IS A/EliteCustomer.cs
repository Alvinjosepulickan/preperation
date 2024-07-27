using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._2.RelationShip._3._Inheritance_or_IS_A
{
    public class EliteCustomer:Customer
    {
        public EliteCustomer():base()
        { 
        }

        public int CouponsOwned { get; set; }
    }

}
