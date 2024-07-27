using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates
{
    public delegate string AlertDelegate(string customerName, string mediaType, int discount);
    public class DelegateDemo
    {
        public DelegateDemo()
        {
            // single cast
            AlertDelegate alertSingleCast = new AlertDelegate(Alerts.SendSMS);
            string message = alertSingleCast("Aurelius", "9807865432", 15);


            //multicast

            AlertDelegate alertMultiCast = new AlertDelegate(Alerts.SendSMS);
            alertMultiCast += Alerts.SendWhatsApp;
            alertMultiCast += Alerts.SendEmail;
            message = alertMultiCast("Aurelius", "9807865432", 15);

        }
    }
}
