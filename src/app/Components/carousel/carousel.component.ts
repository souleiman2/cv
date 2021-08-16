import { Component, OnInit } from '@angular/core';
import { BEST_PROJECTS } from '../../Services/projects-data'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images : Array<string> = BEST_PROJECTS.map(x => x.image_url)

}
