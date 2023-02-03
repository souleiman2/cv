import {
  faCode,
  faServer,
  faCube,
  faBrain,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// Skills
const skills = [
  {
    icon: faCube,
    content: "Angular - React - React Native - Redux - Bootstrap - Web/Android/IOS - Ionic",
  },
  {
    icon: faCode,
    content: "Python - Java - Typescript - Javascript - HTML - CSS - SCSS - C/C++ - Solidity - Kotlin - SQL - Git",
  },
  {
    icon: faServer,
    content: "Flask - Django - Kubernetes - AWS - Azure - NodeJS - Firebase - Docker - Elasticsearch - Logstash - Kibana - PostgreSQL - MongoDB - Dynamodb",
  },
  {
    icon: faBrain,
    content: "Tensorflow - Sklearn - Statsmodels - Matplotlib - Seaborn - Numpy - Scipy - Pandas - NLTK",
  },
];

const skills_title_en = ["Frontend", "Programming Languages", "Backend", "Machine Learning"]
const skills_title_fr = ["Front-End", "Langages de Programmation", "Back-End", "Apprentissage automatique"]


export const skills_en: Array<ISkillItem> = []
skills.forEach((element, index) => {
  skills_en.push({...element, title : skills_title_en[index]})
})

export const skills_fr : Array<ISkillItem> = []
skills.forEach((element, index) => {
  skills_fr.push({...element, title : skills_title_fr[index]})
})


export interface ISkillItem {
  icon: IconDefinition;
  title: string;
  content: string;
}
