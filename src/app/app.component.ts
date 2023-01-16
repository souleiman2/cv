import { Component } from '@angular/core';
import { faGraduationCap, faCertificate, faAward, faLanguage, faFire, faTrophy, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCode, faServer, faCube, faBrain } from '@fortawesome/free-solid-svg-icons';


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
  

  // Skills
  skills : Array<ISkillItem> = [
    {
      icon : faCube,
      title : "Frontend",
      content : "Angular - React - React Native - Redux - Bootstrap - Web/Android/IOS - Ionic"
    },
    {
      icon : faCode,
      title : "Programming Languages",
      content : "Python - Java - Typescript - Javascript - HTML - CSS - SCSS - C/C++ - Solidity - Kotlin - SQL - Git"
    },
    {
      icon : faServer,
      title : "Backend",
      content : "Flask - Django - Kubernetes - AWS - Azure - NodeJS - Firebase - Docker - Elasticsearch - Logstash - Kibana - PostgreSQL - MongoDB - Dynamodb"
    },
    {
      icon : faBrain,
      title : "Machine Learning",
      content : "Tensorflow - Sklearn - Statsmodels - Matplotlib - Seaborn - Numpy - Scipy - Pandas - NLTK"
    }
  ]


  // Projects
  // - Featured Projects
  

  // - Noteworthy Projects

}

interface ISkillItem {
  icon : IconDefinition,
  title : string,
  content : string
}

