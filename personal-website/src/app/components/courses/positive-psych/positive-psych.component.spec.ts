import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivePsychComponent } from './positive-psych.component';

describe('PositivePsychComponent', () => {
  let component: PositivePsychComponent;
  let fixture: ComponentFixture<PositivePsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivePsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivePsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
