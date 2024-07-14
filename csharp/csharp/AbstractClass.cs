using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp
{
    public abstract class AbstractClass
    {
        public AbstractClass(int i)
        {
            Console.WriteLine(i);
        }
    }
    public class ImpleClass : AbstractClass
    {
        public ImpleClass(int i):base(i)
        {
            
        }
    }
}