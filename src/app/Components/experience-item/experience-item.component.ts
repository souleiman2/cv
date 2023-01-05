import { Component, Input } from '@angular/core';
import { Experience } from '../../Interfaces/experience'

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input() education!: Experience;

}
