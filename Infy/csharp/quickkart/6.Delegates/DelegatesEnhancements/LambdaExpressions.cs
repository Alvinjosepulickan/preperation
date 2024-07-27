using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates.DelegatesEnhancements
{
    public delegate double BirthdayDelegate(double amount);
    internal class LambdaExpressions
    {
        public void Method()
        {
            BirthdayDelegate discountDel = (double amount) =>
            {
                double discountAmount = amount * 0.2;
                return discountAmount;
            };

            double discountCustomerOne = discountDel(2500);
            Console.WriteLine("Amount after applying 20% discount = " + discountCustomerOne);
            double discountCustomerTwo = discountDel(5600);
            Console.WriteLine("Amount after applying 20% discount = " + discountCustomerTwo);
            double discountCustomerThree = discountDel(4000);
            Console.WriteLine("Amount after applying 20% discount = " + discountCustomerThree);
        }
    }
}
