import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Interfaces/project';


@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent {
  @Input() project : Project

  constructor() {
    console.log(this.project)
  }

}
