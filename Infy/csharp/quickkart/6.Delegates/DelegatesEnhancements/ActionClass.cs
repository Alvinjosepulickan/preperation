using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates.DelegatesEnhancements
{
    public class ActionClass
    {
        public void Method()
        {

            Action<int, int> numberToString = (number1, number2) =>
            {
                Console.WriteLine(number1 + number2);
            };
            numberToString(123, 321); 

        }
    }
    }
