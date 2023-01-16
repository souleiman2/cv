import { Component } from '@angular/core';
import { faGraduationCap, faCertificate, faAward, faLanguage, faFire, faTrophy, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCode, faServer, faCube, faBrain } from '@fortawesome/free-solid-svg-icons';
import { IProject } from './Interfaces/project';


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
  featured_projects : Array<IProject> = [
    {
      title : "PyChessAI",
      description : "This is the description",
      dev_tools : ["Python"],
      img_url : "assets/chess.jpg"
    },
    {
      title : "PyChessAI2",
      description : "This is the description",
      dev_tools : ["Python"],
      img_url : "assets/chess.jpg"
    }
    /**
     * McGill
     * Real Estate Listing
     * Sudoku Generator
     * Data Science projects
     * Unilinks
     */
  ]

  // - Noteworthy Projects

  /**
   * Rest
   */

}

interface ISkillItem {
  icon : IconDefinition,
  title : string,
  content : string
}

