import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IELTSComponent } from './ielts.component';

describe('IELTSComponent', () => {
  let component: IELTSComponent;
  let fixture: ComponentFixture<IELTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IELTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IELTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
