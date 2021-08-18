import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHighlightComponent } from './event-highlight.component';

describe('EventHighlightComponent', () => {
  let component: EventHighlightComponent;
  let fixture: ComponentFixture<EventHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
