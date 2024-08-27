let showImage:boolean = true;
let productId:number = 1045;

let productName:string="Samsung Galaxy J7";
let message:string = `The product name is ${productName}`;
let catalog = `The products in the catalog are 
				TV
				Refigerator
				Airconditioner
				Geyser`;
console.log(catalog); 


let screenSize:any;
screenSize=13.97;
screenSize="5.5-inch";



let product:void=undefined;
function displayProductDetails(): void {
    console.log("Product category is Gadget");
}




let unionVar : string | number|boolean| undefined;
unionVar = 'hello'; //no error
unionVar = 5;       //no error
unionVar = true;    //no error
unionVar = undefined; //will throw error as undefined is not mentioned in the union in line 1
