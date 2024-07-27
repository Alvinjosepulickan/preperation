using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quickkart._6.Delegates
{
    public class Sale
    {
        public Customer Customer { get; set; }
        public int Discount { get; set; }
        public Sale(Customer customer)
        {
            this.Customer = customer;
        }
        public string YearEndSale()
        {
            this.Discount = 15;
            string message = string.Empty;
            #region Single Alert Preference
            if (Customer.AlertPreference == "SMS")
            {
                message = Alerts.SendSMS(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            if (Customer.AlertPreference == "Email")
            {
                message = Alerts.SendEmail(Customer.CustomerName, Customer.EmailId, Discount);
            }
            if (Customer.AlertPreference == "WhatsApp")
            {
                message = Alerts.SendWhatsApp(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            #endregion
            return message;
        }
        public string ClearanceSale()
        {
            this.Discount = 15;
            string message = string.Empty;
            #region Single Alert Preference
            if (Customer.AlertPreference == "SMS")
            {
                message = Alerts.SendSMS(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            if (Customer.AlertPreference == "Email")
            {
                message = Alerts.SendEmail(Customer.CustomerName, Customer.EmailId, Discount);
            }
            if (Customer.AlertPreference == "WhatsApp")
            {
                message = Alerts.SendWhatsApp(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            #endregion
            return message;
        }
        public string FestiveOffer()
        {
            this.Discount = 15;
            string message = string.Empty;
            #region Single Alert Preference
            if (Customer.AlertPreference == "SMS")
            {
                message = Alerts.SendSMS(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            if (Customer.AlertPreference == "Email")
            {
                message = Alerts.SendEmail(Customer.CustomerName, Customer.EmailId, Discount);
            }
            if (Customer.AlertPreference == "WhatsApp")
            {
                message = Alerts.SendWhatsApp(Customer.CustomerName, Customer.PhoneNumber, Discount);
            }
            #endregion
            return message;
        }


    }
}
