namespace Utility {
    export namespace Payment {
        export function CalculateAmount(price: number, quantity: number): number {
            return price * quantity;
        }
    }
    export function MaxDiscountAllowed(noOfProduct: number): number {
        if (noOfProduct > 5) {
            return 40;
        } else {
            return 10;
        }
    }
    function privateFunc(): void {
        console.log('This is private...');
    }
}
 


/// <reference path="./namespace_demo.ts" />
import util = Utility.Payment;
let paymentAmount = util.CalculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);
let paymentAmount1 = Utility.Payment.CalculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount1}`);
let discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);
