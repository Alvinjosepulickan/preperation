using quickkart._2.RelationShip._1.Aggregation_or_HAS_A;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._2.RelationShip._2._Association_or_USES_A
{
    public class Purchase
    {
        public double CalculateBillAmount(Cart cart)
        {
            double totalPrice = 0;
            double[] priceList = cart.FetchPriceList();
            if (priceList != null)
            {
                for (int i = 0; i < priceList.Length; i++)
                {
                    totalPrice += priceList[i];
                }
            }

            return totalPrice;
        }

    }
}
