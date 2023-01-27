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
      description : "Python Chess program where a user can choose to play with certain artificiel intelligences (machine learning and others) or play against another human",
      dev_tools : ["Python", "Pygame"],
      img_url : "assets/chess.jpg",
      git_url : "https://github.com/souleiman2/ChessAI"
    },
    {
      title : "McGill PhysHack",
      description : "Visualisation of Angular velocity in arbitrary dimensions",
      dev_tools : ["p5", "Javascript", "HTML"],
      img_url : "assets/tesseract.jpg",
      git_url : "https://github.com/souleiman2/McGillPhysHack2018",
      demo_url : "https://souleiman2.github.io/McGillPhysHack2018/"
    },
    {
      title : "NLP Practice",
      description : "NLP and models to achieve questions answering and tagging. Used TF-IDF, Word2Vec, FastText and Bert.",
      dev_tools : ["Jupyter Notebook", "Python", "torch", "transformers", "nltk", "sklearn", "scipy"],
      img_url : "assets/word2vec.png",
      git_url : "https://github.com/souleiman2/NLP-Practice"
    },
    {
      title : "Rental Housing Viz",
      description : "Montreal Rental Real Estate Data Visualization",
      dev_tools : ["d3js", "Javascript", "HTML"],
      img_url : "assets/housing.jpg",
      git_url : "https://github.com/souleiman2/Logement-Locatif-Viz",
      demo_url : "https://souleiman2.github.io/Logement-Locatif-Viz/"
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

