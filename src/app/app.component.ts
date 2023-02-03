import { Component } from '@angular/core';
import { faGraduationCap, faCertificate, faAward, faLanguage, faFire, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { IProject } from './Interfaces/project';
import { Labels } from './Data/labels-data';
import { LanguageService } from './Services/language.service';
import { ISkillItem } from './Data/skill-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faGraduationCap = faGraduationCap
  faCertificate = faCertificate
  faAward = faAward
  faLanguage = faLanguage
  faFire = faFire
  faTrophy = faTrophy
  
  // featured_projects : IProject[]
  // noteworthy_projects : IProject[]
  // skills : ISkillItem[]
  // labels : Labels
  
  constructor(public languageService : LanguageService){
    // this.featured_projects = languageService.featured_projects
    // this.noteworthy_projects = languageService.noteworthy_projects
    // this.skills = languageService.skills
    // this.labels = languageService.label_voc
  }
}

