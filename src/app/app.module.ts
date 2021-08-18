import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ItemProjectComponent } from './Components/item-project/item-project.component';
import { EducationComponent } from './Components/education/education.component';
import { EducationItemComponent } from './Components/education-item/education-item.component';
import { CompetitiveEventsComponent } from './Components/competitive-events/competitive-events.component';
import { EventHighlightComponent } from './Components/competitive-events/event-highlight/event-highlight.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    CarouselComponent,
    ItemProjectComponent,
    EducationComponent,
    EducationItemComponent,
    CompetitiveEventsComponent,
    EventHighlightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
