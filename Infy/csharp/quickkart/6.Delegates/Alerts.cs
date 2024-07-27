using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates
{
    public class Alerts
    {
        public static string SendSMS(string customerName, string phoneNumber, int discount)
        {
            string message = "SMS Sent to " + phoneNumber + "\nDear " + customerName +
                       ", Avail " + discount +
                       "% discount on all purchased items.\n";
            return message;
        }
        public static string SendEmail(string customerName, string phoneNumber, int discount)
        {
            string message = "SMS Email to " + phoneNumber + "\nDear " + customerName +
                       ", Avail " + discount +
                       "% discount on all purchased items.\n";
            return message;
        }
        public static string SendWhatsApp(string customerName, string phoneNumber, int discount)
        {
            string message = "WhatsApp message Sent to " + phoneNumber + "\nDear " + customerName +
                       ", Avail " + discount +
                       "% discount on all purchased items.\n";
            return message;
        }

    }
}
