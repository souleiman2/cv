import { Component } from '@angular/core';
import { WORK_ITEMS } from 'src/app/Services/work-data';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  education_infos = WORK_ITEMS
}
