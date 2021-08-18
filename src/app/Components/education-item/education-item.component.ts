import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../Interfaces/education'

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {

  @Input() education : Education

  constructor() { }

}
