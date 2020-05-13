import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitivePsychComponent } from './cognitive-psych.component';

describe('CognitivePsychComponent', () => {
  let component: CognitivePsychComponent;
  let fixture: ComponentFixture<CognitivePsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitivePsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitivePsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
