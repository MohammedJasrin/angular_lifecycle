import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Mohammed Jasrin';
//   location = "Trivandrum";
//   company="UST";


//   productId="123abc";
//   description="Dual cam megapixel with 120/8"
//   available=true;
//   instock = this.available;
//   qty=200;
//   orderqty = 0;
//   orderDate : Date = new Date;
//   // isOrderQtyAvailable=(this.orderqty<this.qty)?true:false;
//   getOrderQtyAvailabilityHtml(): string {
//     const isAvailable = this.orderqty <= this.qty ;
//     return isAvailable ? '<span style="color:green;">True</span>' : '<span style="color:red;">False</span>';
//   }
//   delivercolour = "red"
//   printOrder():void{
//     console.log(this.orderqty,'order quantity')
//   }

//   evencolor="blue"
//   oddcolor="pink"

//   products = [{"productId":"WEE1234","Description":"NoteBook","price":"234"},
//     {"productId":"WEE1235","Description":"pen","price":"123"},
//     {"productId":"WEE1236","Description":"text","price":"213"},
//     {"productId":"WEE1237","Description":"table","price":"42"},
//     {"productId":"WEE1238","Description":"chair","price":"543"},
//     {"productId":"WEE1239","Description":"cloth","price":"24"}
//   ]
//   printOrderincolsole(order : any):void{
//     console.log(order,'Placed');
//   }

//   changebackground(color:string):void{
    
//   }
//   checker(quatnum:any): boolean{
//     return true 
//   }
  
// }


@Component({
  
    selector: 'app-root',
   templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})

export class AppComponent{
  title=""
  EnterName="John Doe"
  EnterStatus="Single"
  EnterAge="22"
  parentData1=""
  parentData2=""
  parentData3=""


  transferData(){
    this.parentData1=this.EnterName
    this.parentData2=this.EnterAge
    this.parentData3=this.EnterStatus 
  }
  data!:string
  
  onsubmit()
  {
    this.data=this.title
  }
}


