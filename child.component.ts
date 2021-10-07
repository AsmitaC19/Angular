import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{ 
  @Input() public parentData:string="";
  @Output() MyEvent=new EventEmitter();
  public str2:string;
  constructor() 
  {
    this.str2="";
  }
   
  public fun()
  {
    this.MyEvent.emit("Hello from Child");
  }

  ngOnInit(): void {
  }

}
