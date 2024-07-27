using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._8.MemoryMgmt
{
    public class UseDispose : IDisposable
    {

        public void Dispose()
        {

            //Console.WriteLine("Dispose: Dispose {0}", counter);
            //writer.WriteLine("Dispose method called before releasing the file handler.....!!");
            //writer.Flush();
            //writer.Close();
            //stream = null;
            //writer = null;
            //Console.WriteLine("Cleared Unmanaged Objects");
            //GC.SuppressFinalize(this);
        }
    }
}
