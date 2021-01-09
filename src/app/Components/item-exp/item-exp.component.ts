import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-exp',
  templateUrl: './item-exp.component.html',
  styleUrls: ['./item-exp.component.css']
})
export class ItemExpComponent implements OnInit {
  @Input() title : String;
  @Input() subTitle : String;
  @Input() elemList : Array<String>;
  @Input() techs : String;
  @Input() time : String;
  
  
  constructor() { }

  ngOnInit() {
  }

}
