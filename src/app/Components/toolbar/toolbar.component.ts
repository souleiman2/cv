import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sections : Array<SectionItem> = [
    {label : "About", url : "#about"},
    {label : "Skills", url : "#skills"},
    {label : "Experience", url : "#xp"},
    {label : "Projects", url : "#projects"},
    {label : "Contact", url : "#contact"}
  ]

  constructor(@Inject(DOCUMENT) document: Document){
    console.log("wow")
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
}

interface SectionItem{
  label : string,
  url : string
}
