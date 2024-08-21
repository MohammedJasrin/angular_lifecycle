export class Product { 

    productId : string;
    productDescription : string;
    brand : string; 
    qty : number;
    price : number;
    suppliername: string;

    constructor (productID : string, productDescription :string, brand :string , qty :number, price :number, suppliername:string){
        this.productId=productID;
        this.productDescription=productDescription;
        this.brand=brand;
        this.qty=qty
        this.price=price
        this.suppliername=suppliername;
    }
    
}