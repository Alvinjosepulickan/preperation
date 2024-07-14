using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Indexer
{
    public class IndexerEg
    {
        public int MyProperty { get; set; }
        public int MyProperty1 { get; set; }
        public int MyProperty2 { get; set; }
        public int MyProperty3 { get; set; }
        public int MyProperty4 { get; set; }
        public int MyProperty5 { get; set; }
        public int MyProperty6 { get; set; }

        public int this[int indexValue]
        {
            get
            {
                switch (indexValue)
                {
                    case 0:
                        return MyProperty;
                    case 1:
                        return MyProperty1;
                    case 2:
                        return MyProperty2;
                    case 3:
                        return MyProperty3;
                    case 4:
                        return MyProperty4;
                    case 5:
                        return MyProperty5;
                    default:
                        return MyProperty6;
                }
            }
            set
            {
                switch (indexValue)
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
                    case 4:
                        MyProperty4 = value;
                        break;
                    case 5:
                        MyProperty5 = value;
                        break;
                    default:
                        MyProperty6 = value;
                        break;
                }
            }
        }

    }
}
