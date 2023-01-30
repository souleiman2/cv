import { Injectable } from '@angular/core';
import { ITimelineItem } from '../Interfaces/experience';
import { IProject } from '../Interfaces/project';
import { Language, en_labels, Labels, fr_labels } from './labels-data'
import { featured_projects_en, noteworthy_projects_en } from './project-data';
import { ISkillItem, skills_en } from './skill-data';
import { work_items_en } from './work-data';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  DEFAULT_LANGUAGE : Language = Language.ENGLISH
  current_language : Language = this.DEFAULT_LANGUAGE
  label_voc : Labels = en_labels
  featured_projects : Array<IProject> = featured_projects_en
  noteworthy_projects : Array<IProject> = noteworthy_projects_en
  skills : Array<ISkillItem> = skills_en
  work_items : Array<ITimelineItem> = work_items_en
  

  toggleLanguage(){
    if (this.current_language == Language.ENGLISH){
      this.current_language = Language.FRENCH
      this.label_voc = fr_labels
    }else{
      this.current_language = Language.ENGLISH
      this.label_voc = en_labels
      this.featured_projects = featured_projects_en
      this.noteworthy_projects = noteworthy_projects_en
      this.skills = skills_en
      this.work_items = work_items_en
      
    }
    console.log(this.current_language)
  }
}
