import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingtheoryComponent } from './computingtheory.component';

describe('ComputingtheoryComponent', () => {
  let component: ComputingtheoryComponent;
  let fixture: ComponentFixture<ComputingtheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputingtheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputingtheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
