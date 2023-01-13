import { Component } from '@angular/core';
import { faGraduationCap, faCertificate, faAward, faLanguage } from '@fortawesome/free-solid-svg-icons';

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
  
}
