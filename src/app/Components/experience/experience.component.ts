import { Component } from '@angular/core';
import { TIMELINE_ITEMS } from 'src/app/Services/projects-data';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  education_infos = TIMELINE_ITEMS
}
