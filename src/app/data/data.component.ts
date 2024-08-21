import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  productData: Product[] =[]
 countTotal : number=0;
 constructor(private service:DataService ){
  this.productData=service.getProducts();
  console.log(this.productData)
  this.countTotal =this.productData.length;
 }
j=0
 brandd="";
 pricee=0;
 price1=0;

 items: number=0
 price2=0
 adder(num:any){
  this.items+=num
  return true
 }
// this.ff = this.Product.filter(brand1=>brand1.brand=="TATA")
realdate=new Date
money="600"
upper="UPPER"
product: Product = new Product('','','',0,0,'')
onSubmit(){
  console.log(this.product);
  this.productData.push(this.product)
}
}



