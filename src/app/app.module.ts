import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ExperienceItemComponent } from './Components/experience-item/experience-item.component';
import { SkillItemComponent } from './Components/skill-item/skill-item.component';
import { ProjectComponent } from './Components/project/project.component';
import { OtherProjectComponent } from './Components/other-project/other-project.component';
import { LinkButtonComponent } from './Components/link-button/link-button.component';
import { BadgeComponent } from './Components/badge/badge.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    SkillItemComponent,
    ProjectComponent,
    OtherProjectComponent,
    LinkButtonComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
