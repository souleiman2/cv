import { Component, OnInit } from '@angular/core';
import { TIMELINE_ITEMS } from 'src/app/Services/projects-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  education_infos = TIMELINE_ITEMS
}
