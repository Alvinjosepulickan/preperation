using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._1.Oops
{
    internal class refandout
    {
        public int Method(int i,int j,ref int k, out int q,out int m)
        {
            q = i + j + k;
            k = k + 10;
            m = j;
            return q + 10;
        }
    }
}
