using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._7.Extensionmethods
{
    public static class ExtensionDemo
    {
        public static bool CheckEqulaz(this string s, string p)
        {
            if(s.Equals(p))
                return true;
            return false;
        }
    }

    public class NewClass
    {
        public void Check()
        {
            var j = "name";
            var p = "name";
            var q=j.CheckEqulaz(p);
        }
    }
}
