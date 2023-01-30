import { Component } from '@angular/core';
import { ITimelineItem } from 'src/app/Interfaces/experience';
import { LanguageService } from 'src/app/Services/language.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  education_infos : Array<ITimelineItem>

  constructor(languageService : LanguageService){
    this.education_infos = languageService.work_items
  }
}
