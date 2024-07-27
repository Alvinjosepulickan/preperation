using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates.DelegatesEnhancements
{
    public class FuncClass
    {
        public void Method()
        {

            Func<int, int, string> numberToString = (number1, number2) =>
            {
                return Convert.ToString(number1 + number2);
            };
            string result = numberToString(123,321); // Converts number to string
            Console.WriteLine(result);

        }
    }
}
