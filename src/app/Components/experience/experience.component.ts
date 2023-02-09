import { Component } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor(public languageService : LanguageService){
  }
}
