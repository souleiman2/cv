import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  education : ItemExp[] = [
    {
      title : "Polytechnique Montreal",
      subTitle : "Bachelor in Software Engineering",
      elemList : [
        "Recipient of the Admission Excellence Scholarship",
        "Mention of Excellence for outstanding performance (GPA : 3,57/4)",
        "82 credits completed"
      ],
      techs : undefined,
      time: "Aug. 2018 – Present"
    },
    {
      title : "College Bois-de-Boulogne",
      subTitle : "DEC in Computer science and mathematics",
      elemList : [],
      techs : undefined,
      time: "Aug. 2016 – May 2018"
    },
    {
      title : "Beaubois",
      subTitle : "High School",
      elemList : ["Programmed alone a chess engine with Xojo that records move, let’s the user undo a move and let’s you choose your game mode (Bot/Human vs Bot/Human)"],
      techs : undefined,
      time: "Aug. 2011 – May 2016"
    }
  ];

  experience : Array<ItemExp> = [
    {
      title : "Software engineering internship",
      subTitle : "Mitacs in collaboration with Eduplan Solutions",
      elemList : [
        "Development of a Flask REST API whose purpose would be to input students profiles to recommend goals and means for them using machine learning",
        "Made many AI models and compared them with each other by basing their performance on different metrics",
        "Documented the algorithms and strategies used and gave oral reports on the progress of the work",
        "Accessed the database through SQL",
        "Critiqued the user interface and the security of the platform during weekly meetings"
      ],
      techs : undefined,
      time: "Summer 2020"
    },
    {
      title : "Initiation to research",
      subTitle : "Polytechnique Montreal",
      elemList : [
        "Goal : Brain segmentation on newborns from 3D MRI scans using machine learning in computer vision",
        "Automated the download of the database (web scraping)",
        "Documented the code vigorously",
      ],
      techs : undefined,
      time: "Sept. 2019 – May 2020"
    },
    {
      title : "Research assistant",
      subTitle : "Shriners Hospitals for Children",
      elemList : [
        "Creation of a native Android application to help children become familiar with their handicap by playing instructive games",
        "Made the whole app UI/Logic"
      ],
      techs : undefined,
      time: "Summer: 2017 – 2018"
    },
    {
      title : "Tutor in Computer Science, Mathematics and Physics",
      subTitle : "College Bois-de-Boulogne",
      elemList : [
        "Vulgarized the content of my classmates’ lessons and helped adults learn the basics of programming",
        "Planned which exercises they should do for the next meeting",
        "Wrote reports of their progress to the administration"
      ],
      techs : undefined,
      time: "2017 – 2018"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ItemExp{
  title : String;
  subTitle : String;
  elemList : String[];
  techs : String;
  time : String;
}