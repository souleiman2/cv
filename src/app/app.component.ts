import { Component } from '@angular/core';
import { faGraduationCap, faCertificate, faAward, faLanguage, faFire, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { IProject } from './Interfaces/project';
import { featured_projects, noteworthy_projects } from './Services/project-data';
import { ISkillItem, skills } from './Services/skill-data'

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
  
  featured_projects : IProject[] = featured_projects
  noteworthy_projects : IProject[] = noteworthy_projects
  skills : ISkillItem[] = skills
}

