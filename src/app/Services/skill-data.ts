import {
  faCode,
  faServer,
  faCube,
  faBrain,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// Skills

export const skills: Array<ISkillItem> = [
  {
    icon: faCube,
    title: "Frontend",
    content:
      "Angular - React - React Native - Redux - Bootstrap - Web/Android/IOS - Ionic",
  },
  {
    icon: faCode,
    title: "Programming Languages",
    content:
      "Python - Java - Typescript - Javascript - HTML - CSS - SCSS - C/C++ - Solidity - Kotlin - SQL - Git",
  },
  {
    icon: faServer,
    title: "Backend",
    content:
      "Flask - Django - Kubernetes - AWS - Azure - NodeJS - Firebase - Docker - Elasticsearch - Logstash - Kibana - PostgreSQL - MongoDB - Dynamodb",
  },
  {
    icon: faBrain,
    title: "Machine Learning",
    content:
      "Tensorflow - Sklearn - Statsmodels - Matplotlib - Seaborn - Numpy - Scipy - Pandas - NLTK",
  },
];

export interface ISkillItem {
  icon: IconDefinition;
  title: string;
  content: string;
}
