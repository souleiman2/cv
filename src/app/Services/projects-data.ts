import { Education } from "../Interfaces/education";
import { Project } from "../Interfaces/project";

export const PROJECTS: Array<Project> = [
  {
    name: "FastFix",
    image_url: "assets/tools.jpg",
    redirected_url: "https://souleiman2.github.io/FastFix/",
  },
  {
    name: "McGillPhysHack",
    image_url: "assets/multidimensionnal.jpg",
    redirected_url: "https://souleiman2.github.io/McGillPhysHack2018/",
  },
  {
    name: "PyChessAI",
    image_url: "assets/chess.jpg",
    redirected_url: "https://github.com/souleiman2/ChessAI",
  },
  {
    name: "Sudoku Generator",
    image_url: "assets/sudoku.jpg",
    redirected_url: "https://github.com/souleiman2/Sudoku-Generator",
  },
  {
    name: "Unilinks",
    image_url: "assets/event.jpg",
    redirected_url: "https://unilinks-2cba6.web.app/app",
  },
  {
    name: "Real Estate Listing",
    image_url: "assets/real_estate.jpg",
    redirected_url: "https://ayoubsaade.github.io/maisons/",
  },
  {
    name: "L-System",
    image_url: "assets/l-system2.jpg",
    redirected_url: "https://souleiman2.github.io/L-system/",
  },
  {
    name: "Hanoi Tower",
    image_url: "assets/hanoi-tower.jpg",
    redirected_url: "https://souleiman2.github.io/HanoiTower/main.html",
  },
  {
    name: "Clone Attack",
    image_url: "assets/tentacles2.PNG",
    redirected_url: "https://github.com/LeKo0/TP2_ADC",
  },
  {
    name: "Mender Sponge",
    image_url: "assets/mendersponge.jpg",
    redirected_url: "https://souleiman2.github.io/MenderSponge/main.html",
  },
  {
    name: "Snake",
    image_url: "assets/snake.jpg",
    redirected_url: "https://souleiman2.github.io/snake/",
  },
];

export const WALLPAPERS: Array<String> = [
  "assets/chess.jpg",
  "assets/wallpaper/wall.png",
  "assets/wallpaper/wall1.jpg",
  "assets/wallpaper/wall6.jpg",
  "assets/wallpaper/wall3.jpg",
  "assets/wallpaper/wall4.jpg",
  "assets/wallpaper/wall5.jpg",
];

export const TIMELINE_ITEMS: { [id: string]: Education[] } = {
  "2021": [
    {
      title: "Polytechnique Montreal",
      subTitle: "Bachelor in Software Engineering",
      elemList: [
        "Recipient of the Admission Excellence Scholarship",
        "Mention of Excellence for outstanding performance (GPA : 3,63/4)",
        "105 credits completed",
      ],
      time: "Aug. 2018 – Present",
    },
  ],
  "2020" : [
    {
      title : "Software Engineering internship",
      subTitle : "Machine learning on a Mitacs project",
      elemList : ["Made many AI models that input students profiles to recommend goals and means"],
      time : "Summer 2020"
    },
    {
      title : "Initiation to research",
      subTitle : "Polytechnique Montreal",
      elemList : ["Brain segmentation on newborns from 3D MRI scans using machine learning in computer vision"],
      time : "Sept. 2019 – May 2020"
    }
  ],
  "2018": [
    {
      title : "College Bois-de-Boulogne",
      subTitle: "DEC in Computer Science and Mathematics",
      elemList : null,
      time : "Aug. 2016 – May 2018"
    },
    {
      title : "Research assistant",
      subTitle : "Shriners Hospitals for Children",
      elemList : ["Creation of a native Android application to help children become familiar with their handicap by playing instructive games"],
      time : "Summer: 2017 – 2018"
    },
    {
      title : "Tutor in CS, Math and Physics",
      subTitle : null,
      elemList : null,
      time : "2017 – 2018"
    }
  ],
  "2016" : [
    {
      title : "Beaubois",
      subTitle : null,
      elemList: ["Programmed Chess engine in Basic (Bot/Human vs Bot/Human)"],
      time : "Aug. 2011 – May 2016"
    }
  ]
};
