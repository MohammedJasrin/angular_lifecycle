import { Injectable } from '@angular/core';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class DataService {
products : Product[] = [];
  constructor() {
    this.products[0] = new Product("1","DishTv","TATA",10,20500,"Consultency")
    this.products[1] = new Product("2","Mobile","Jio",9,2000,"Ambani")
    this.products[2] = new Product("3","Table","TATA",4,700,"showroom")
    this.products[3] = new Product("4","Chair","Seat",4,200,"Chairman")
    this.products[4] = new Product("5","Bed","Sleeper",5,500,"Sleepy")
    this.products[5] = new Product("6","Soap","TATA",15,50,"Doe")
    this.products[6] = new Product("7","HairOil","Amit",1,500,"HeadAndSholders")
    this.products[7] = new Product("8","Soaks","Good",6,500,"Brand")
    this.products[8] = new Product("9","Headgear","TATA",50,900,"Avo")
    this.products[9] = new Product("10","Tv","Samgsong",6,600,"Galaxy")
   }
   getProducts():Product[]{
    return this.products;
  }
}
