import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveEventsComponent } from './competitive-events.component';

describe('CompetitiveEventsComponent', () => {
  let component: CompetitiveEventsComponent;
  let fixture: ComponentFixture<CompetitiveEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitiveEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
