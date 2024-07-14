using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.DeligateEg
{
    public delegate void DeligateEgDelegate(string message);
    public class DeligateEg
    {
        public static void Hello(string message)
        { 
            Console.WriteLine(message + " from hello"); 
        }
        public static void Hello2(string message)
        {
            Console.WriteLine(message +" from hello2");
        }
        public static void Hello3(string message)
        {
            Console.WriteLine(message + " from hello3");
        }

        public void CallDelegate()
        {
            var del = new DeligateEgDelegate(Hello);
            del += Hello2;
            del += Hello3;
            del("Hello World");
        }
    }

}
