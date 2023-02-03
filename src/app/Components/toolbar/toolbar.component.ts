import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Language } from 'src/app/Data/labels-data';
import { SectionItem } from 'src/app/Data/toolbar-data';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(@Inject(DOCUMENT) document: Document, public languageService : LanguageService){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar")!!.style.top = "0";
      } else {
        document.getElementById("navbar")!!.style.top = "-110px";
      }
      prevScrollpos = currentScrollPos;
    };
  }

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
