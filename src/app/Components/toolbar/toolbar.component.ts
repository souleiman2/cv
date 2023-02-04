import { Component } from '@angular/core';
import { Language } from 'src/app/Data/labels-data';
import { SectionItem } from 'src/app/Data/toolbar-data';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public languageService : LanguageService){}

  trans_lang(){
    if (this.languageService.current_language == Language.ENGLISH){
      return Language.FRENCH.toUpperCase()
    }
    return Language.ENGLISH.toUpperCase()
  }

  toggleLanguage(){
    this.languageService.toggleLanguage()
  }

}
