import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExpComponent } from './item-exp.component';

describe('ItemExpComponent', () => {
  let component: ItemExpComponent;
  let fixture: ComponentFixture<ItemExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
