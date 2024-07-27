using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._1.Oops
{
    public class Indexer
    {
        public int MyProperty { get; set; }
        public int MyProperty1 { get; set; }
        public int MyProperty2 { get; set; }
        public int MyProperty3 { get; set; }

        public Indexer()
        {
            
        }

        public int this[int i, int j]
        {
            get
            {
                switch (i)
                {
                    case 0:
                        return MyProperty;
                    case 1:
                        return MyProperty1;
                    case 2:
                        return MyProperty2;
                    default:
                        return MyProperty3;
                }
            }
            set
            {
                switch (i)
                {
                    case 0:
                        MyProperty = value;
                        break;
                    case 1:
                        MyProperty1 = value;
                        break;
                    case 2:
                        MyProperty2 = value;
                        break;
                    case 3:
                        MyProperty3 = value;
                        break;
                }
            }
        }
    }
}
