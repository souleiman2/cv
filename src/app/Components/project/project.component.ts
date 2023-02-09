import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';
import { IProject } from '../../Interfaces/project'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  default_url : string | undefined

  constructor(public languageService : LanguageService){
  }

  @Input()
  get project(): IProject { return this._project; }
  set project(project: IProject) {
    this._project = project;
    this.default_url = project.demo_url ? project.demo_url : project.git_url
  }

  private _project : IProject = {title : "", description : "", dev_tools : []};
}
