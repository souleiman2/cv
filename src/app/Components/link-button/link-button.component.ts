import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
  @Input() icon_class : any;
  @Input() label : string = "";
  @Input() url : string = "";
}
