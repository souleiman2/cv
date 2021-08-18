import { Component, OnInit } from '@angular/core';
import { WALLPAPERS } from '../../Services/projects-data'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images : Array<String> = WALLPAPERS

}
