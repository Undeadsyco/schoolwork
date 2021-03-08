const sandwich: string = "BLT";
const orderNumber: number = 1738;
const delicious: boolean = true;

function orderFood(sandwich: string, orderNumber: number): void{
    console.log("your order number is "+orderNumber+" and contains a "+sandwich+" sandwich");
}

orderFood("ham & cheese", 32);