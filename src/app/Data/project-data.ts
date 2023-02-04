import { IProject } from "../Interfaces/project";

// Projects
// - Featured Projects
const featured_data_en = [
  {
    title: "PyChessAI",
    description:
      "Python Chess program where a user can choose to play with certain artificiel intelligences (machine learning and others) or play against another human"
  },
  {
    title: "McGill PhysHack",
    description: "Visualisation of Angular velocity in arbitrary dimensions"
  },
  {
    title: "NLP Practice",
    description:
      "NLP and models to achieve questions answering and tagging. Used TF-IDF, Word2Vec, FastText and Bert."
  },
  {
    title: "Rental Housing Viz",
    description: "Montreal Rental Real Estate Data Visualization"
  }
]

const featured_data_fr = [
  {
    title: "PyChessAI",
    description:
      "Programme Python Chess où un utilisateur peut choisir de jouer avec certaines intelligences artificielles (apprentissage automatique et autres) ou de jouer contre un autre humain"
  },
  {
    title: "PhysHack McGill",
    description: "Visualisation de la vitesse angulaire dans des dimensions arbitraires"
  },
  {
    title: "NLP Pratique",
    description:
      "NLP et modèles pour réaliser des réponses aux questions et tagger des phrases. J'ai utilisé TF-IDF, Word2Vec, FastText et Bert."
  },
  {
    title: "Visualisation Logement locatif",
    description: "Visualisation des données de l'immobilier locatif à Montréal"
  }
]

const featured_projects = [
  {
    dev_tools: ["Python", "Pygame"],
    img_url: "assets/chess.jpg",
    git_url: "https://github.com/souleiman2/ChessAI",
  },
  {
    dev_tools: ["p5", "Javascript", "HTML"],
    img_url: "assets/tesseract.jpg",
    git_url: "https://github.com/souleiman2/McGillPhysHack2018",
    demo_url: "https://souleiman2.github.io/McGillPhysHack2018/",
  },
  {
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
    dev_tools: ["d3js", "Javascript", "HTML"],
    img_url: "assets/housing.jpg",
    git_url: "https://github.com/souleiman2/Logement-Locatif-Viz",
    demo_url: "https://souleiman2.github.io/Logement-Locatif-Viz/",
  },
];

export const featured_projects_en : Array<IProject> = []
featured_projects.forEach((element, index) => {
  featured_projects_en.push({...element, ...featured_data_en[index]})
})

export const featured_projects_fr : Array<IProject> = []
featured_projects.forEach((element, index) => {
  featured_projects_fr.push({...element, ...featured_data_fr[index]})
})

// - Noteworthy Projects
const noteworthy_data_en = [
  {
    title: "FastFix",
    description:
      "Template platform for people to find handypeople that would be glad to help you renovate your home.",
  },
  {
    title: "Sudoku-Generator",
    description: "My take on building a program that generates sudoku puzzles",
  },
  {
    title: "Unilinks",
    description:
      "Platform that showcases university and interuniversity activities",
  },
  {
    title: "Classification made from scratch",
    description: "Classification of malignant tumor made from scratch",
  },
  {
    title: "Real Estate Platform",
    description:
      "Real estate listing website that showcases properties for sale and for rent"
  },
  {
    title: "L-system",
    description: "Lindenmayer system visualizer"
  },
  {
    title: "Hanoi Tower",
    description: "Shows the answer of the hanoi tower for n elements"
  },
  {
    title: "HackBDC2019",
    description:
      "Web template giving an automobile company some insights on their inventory"
  },
  {
    title: "Snake",
    description: "Snake game"
  }

]

const noteworthy_data_fr = [
  {
    title: "FastFix",
    description:
      "Plate-forme de modèles permettant aux gens de trouver des bricoleurs qui seraient heureux de vous aider à rénover votre maison.",
  },
  {
    title: "Sudoku-Générateur",
    description: "Mon algorithm pour la construction de grilles de sudoku",
  },
  {
    title: "Unilinks",
    description:
      "Plateforme de mise en valeur des activités universitaires et interuniversitaires",
  },
  {
    title: "AI Classification",
    description: "Classification de la tumeur maligne faite à partir de zéro",
  },
  {
    title: "Plateforme immobilière",
    description:
      "Site d'annonces immobilières qui présente des propriétés à vendre et à louer"
  },
  {
    title: "L-system",
    description: "Visualiseur de système Lindenmayer"
  },
  {
    title: "Tour de Hanoï",
    description: "Affiche la réponse de la tour de hanoi pour n éléments"
  },
  {
    title: "HackBDC2019",
    description:
      "Modèle Web donnant à une entreprise automobile des informations sur son inventaire"
  },
  {
    title: "Snake",
    description: "Le jeu snake"
  }
]

const noteworthy_projects = [
  {
    dev_tools: ["Angular", "Typescript"],
    git_url: "https://github.com/souleiman2/FastFix",
    demo_url: "https://souleiman2.github.io/FastFix/"
  },
  {
    dev_tools: ["Python"],
    git_url: "https://github.com/souleiman2/Sudoku-Generator"
  },
  {
    dev_tools: ["Angular", "Firebase", "Ionic", "Typescript"],
    git_url: "https://github.com/souleiman2/unilinks",
    demo_url: "https://unilinks-2cba6.web.app/tabs/acceuil"
  },
  {
    dev_tools: ["Jupyter Notebook", "Julia"],
    git_url: "https://github.com/souleiman2/Classification-made-from-Scratch"
  },
  {
    dev_tools: ["Angular", "Firebase", "Typescript"],
    git_url: "https://github.com/albertrealestate/properties",
    demo_url: "https://albertrealestate.github.io/properties/"
  },
  {
    dev_tools: ["p5.js", "HTML/CSS/JS"],
    git_url: "https://github.com/souleiman2/L-system",
    demo_url: "https://souleiman2.github.io/L-system/"
  },
  {
    dev_tools: ["HTML/JS"],
    git_url: "https://github.com/souleiman2/HanoiTower",
    demo_url: "https://souleiman2.github.io/HanoiTower/main.html"
  },
  {
    dev_tools: ["HTML/JS/CSS"],
    git_url: "https://github.com/souleiman2/HackathonBDC2019"
  },
  {
    dev_tools: ["HTML/JS"],
    git_url: "https://github.com/souleiman2/snake",
    demo_url: "https://souleiman2.github.io/snake/"
  },
];

export const noteworthy_projects_en : Array<IProject> = []
noteworthy_projects.forEach((element, index) => {
  noteworthy_projects_en.push({...element, ...noteworthy_data_en[index]})
})

export const noteworthy_projects_fr : Array<IProject> = []
noteworthy_projects.forEach((element, index) => {
  noteworthy_projects_fr.push({...element, ...noteworthy_data_fr[index]})
})
