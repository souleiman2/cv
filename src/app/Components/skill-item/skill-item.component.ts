import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() icon !: IconDefinition;
  @Input() title : string | undefined;
  @Input() content : string | undefined;
  
}
