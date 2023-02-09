import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/Interfaces/project';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-other-project',
  templateUrl: './other-project.component.html',
  styleUrls: ['./other-project.component.scss']
})
export class OtherProjectComponent {
  default_url : string | undefined

  constructor(public languageService : LanguageService){}


  @Input()
  get project(): IProject { return this._project; }
  set project(project: IProject) {
    this._project = project;
    this.default_url = project.demo_url ? project.demo_url : project.git_url
  }

  private _project : IProject = {title : "", description : "", dev_tools : []};
}
