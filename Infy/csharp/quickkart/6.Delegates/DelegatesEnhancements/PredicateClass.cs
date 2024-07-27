using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates.DelegatesEnhancements
{
    public class PredicateClass
    {
        public void Method()
        {
            Predicate<int> isEven = number => number % 2 == 0;
            bool result = isEven(4); // result is true

        }
    }
}
