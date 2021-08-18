import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPopUpComponent } from './work-pop-up.component';

describe('WorkPopUpComponent', () => {
  let component: WorkPopUpComponent;
  let fixture: ComponentFixture<WorkPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
