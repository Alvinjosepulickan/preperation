using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._4.Abstract_and_Interface
{
    internal class Class2 : Class1,Interface1
    {
        public Task IsActive()
        {
            throw new NotImplementedException();
        }
        public override void getSomething()
        {
            throw new NotImplementedException();
        }
        public override void setSomething()
        {
            throw new NotImplementedException();
        }
    }
}
