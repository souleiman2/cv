import { Injectable } from '@angular/core';
import { ITimelineItem } from '../Interfaces/experience';
import { IProject } from '../Interfaces/project';
import { Language, en_labels, Labels, fr_labels } from '../Data/labels-data'
import { featured_projects_en, noteworthy_projects_en } from '../Data/project-data';
import { ISkillItem, skills_en, skills_fr } from '../Data/skill-data';
import { work_items_en } from '../Data/work-data';
import { SectionItem, sections_en, sections_fr } from '../Data/toolbar-data';

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
  toolbar_sections : Array<SectionItem> = sections_en
  

  toggleLanguage(){
    if (this.current_language == Language.ENGLISH){
      this.current_language = Language.FRENCH
      this.label_voc = fr_labels
      this.toolbar_sections = sections_fr
      this.skills = skills_fr
    }else{
      this.toolbar_sections = sections_en
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
