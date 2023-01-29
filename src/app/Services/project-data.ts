import { IProject } from "../Interfaces/project";

// Projects
// - Featured Projects
export const featured_projects: Array<IProject> = [
  {
    title: "PyChessAI",
    description:
      "Python Chess program where a user can choose to play with certain artificiel intelligences (machine learning and others) or play against another human",
    dev_tools: ["Python", "Pygame"],
    img_url: "assets/chess.jpg",
    git_url: "https://github.com/souleiman2/ChessAI",
  },
  {
    title: "McGill PhysHack",
    description: "Visualisation of Angular velocity in arbitrary dimensions",
    dev_tools: ["p5", "Javascript", "HTML"],
    img_url: "assets/tesseract.jpg",
    git_url: "https://github.com/souleiman2/McGillPhysHack2018",
    demo_url: "https://souleiman2.github.io/McGillPhysHack2018/",
  },
  {
    title: "NLP Practice",
    description:
      "NLP and models to achieve questions answering and tagging. Used TF-IDF, Word2Vec, FastText and Bert.",
    dev_tools: [
      "Jupyter Notebook",
      "Python",
      "torch",
      "transformers",
      "nltk",
      "sklearn",
      "scipy",
    ],
    img_url: "assets/word2vec.png",
    git_url: "https://github.com/souleiman2/NLP-Practice",
  },
  {
    title: "Rental Housing Viz",
    description: "Montreal Rental Real Estate Data Visualization",
    dev_tools: ["d3js", "Javascript", "HTML"],
    img_url: "assets/housing.jpg",
    git_url: "https://github.com/souleiman2/Logement-Locatif-Viz",
    demo_url: "https://souleiman2.github.io/Logement-Locatif-Viz/",
  },
];

// - Noteworthy Projects
export const noteworthy_projects: Array<IProject> = [
  {
    title: "FastFix",
    description:
      "Template platform for people to find handypeople that would be glad to help you renovate your home.",
    dev_tools: ["Angular", "Typescript"],
    git_url: "https://github.com/souleiman2/FastFix",
    demo_url: "https://souleiman2.github.io/FastFix/",
  },
  {
    title: "Sudoku-Generator",
    description: "My take on building a program that generates sudoku puzzles",
    dev_tools: ["Python"],
    git_url: "https://github.com/souleiman2/Sudoku-Generator",
  },
  {
    title: "Unilinks",
    description:
      "Platform that showcases university and interuniversity activities",
    dev_tools: ["Angular", "Firebase", "Ionic", "Typescript"],
    git_url: "https://github.com/souleiman2/unilinks",
    demo_url: "https://unilinks-2cba6.web.app/tabs/acceuil",
  },
  {
    title: "Classification from scratch",
    description: "Classification of malignant tumor made from scratch",
    dev_tools: ["Jupyter Notebook", "Julia"],
    git_url: "https://github.com/souleiman2/Classification-made-from-Scratch",
  },
  {
    title: "Real Estate Listing",
    description:
      "Real estate listing website that showcases properties for sale and for rent",
    dev_tools: ["Angular", "Firebase", "Typescript"],
    git_url: "https://github.com/albertrealestate/properties",
    demo_url: "https://albertrealestate.github.io/properties/",
  },
  {
    title: "L-system",
    description: "Lindenmayer system visualizer",
    dev_tools: ["p5.js", "HTML/CSS/JS"],
    git_url: "https://github.com/souleiman2/L-system",
    demo_url: "https://souleiman2.github.io/L-system/",
  },
  {
    title: "Hanoi Tower",
    description: "Shows the answer of the hanoi tower for n elements",
    dev_tools: ["HTML/JS"],
    git_url: "https://github.com/souleiman2/HanoiTower",
    demo_url: "https://souleiman2.github.io/HanoiTower/main.html",
  },
  {
    title: "HackBDC2019",
    description:
      "Web template giving an automobile company some insights on their inventory",
    dev_tools: ["HTML/JS/CSS"],
    git_url: "https://github.com/souleiman2/HackathonBDC2019",
  },
  {
    title: "Snake",
    description: "Snake game",
    dev_tools: ["HTML/JS"],
    git_url: "https://github.com/souleiman2/snake",
    demo_url: "https://souleiman2.github.io/snake/",
  },
];
