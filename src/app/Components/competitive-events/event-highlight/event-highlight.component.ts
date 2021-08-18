import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-highlight',
  templateUrl: './event-highlight.component.html',
  styleUrls: ['./event-highlight.component.css']
})
export class EventHighlightComponent implements OnInit {
  @Input() position_url : string;
  @Input() description : string;
  is_string_image : boolean;

  ngOnInit() {
    this.is_string_image = this.position_url.endsWith('.png')
  }

}
