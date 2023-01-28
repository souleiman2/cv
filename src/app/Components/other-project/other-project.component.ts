import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-other-component',
  templateUrl: './other-project.component.html',
  styleUrls: ['./other-project.component.scss']
})
export class OtherProjectComponent {
  @Input() project! : IProject
}
