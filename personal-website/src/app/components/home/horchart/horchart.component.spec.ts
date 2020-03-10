import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorchartComponent } from './horchart.component';

describe('HorchartComponent', () => {
  let component: HorchartComponent;
  let fixture: ComponentFixture<HorchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
