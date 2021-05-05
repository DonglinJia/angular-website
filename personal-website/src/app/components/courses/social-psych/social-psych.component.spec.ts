import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPsychComponent } from './social-psych.component';

describe('SocialPsychComponent', () => {
  let component: SocialPsychComponent;
  let fixture: ComponentFixture<SocialPsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
