import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  title : string = "Hello"
  constructor(){
    console.log("Constructor() is called________")
  }

  ngOnChanges(changes:SimpleChanges):void{ //only runs when there is a change in input in that components
    console.log("ngOnChanges is called_____")
    console.log(changes)
  }
  ngAfterViewInit():void{ //Runs only when all the view for parent and child has been fulfilled
    console.log("AfterViewInit")
  }
  ngAfterViewChecked():void{ 
    console.log("AfterViewChecked")
  }

  ngOnInit(): void {
    console.log("ngOnInit is called _________")
    // throw new Error('Method not implemented.');
  }

  ngDoCheck(change:SimpleChanges):void{ //only happens when there is a change in some other and inside the same component
    console.log("ngDoCheck is called _________")
    
  }
  @Input() display!:string
  
  send(){

  }
  SelectedColour = ""
  sizeoftext=""
  ngAfterContentInit():void{
    console.log("AfterContentInit")
  }
  ngAfterContentChecked():void{
    console.log("AfterContentChecked")
  }
  
}




