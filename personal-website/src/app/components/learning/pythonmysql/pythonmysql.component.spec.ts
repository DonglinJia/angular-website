import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonmysqlComponent } from './pythonmysql.component';

describe('PythonmysqlComponent', () => {
  let component: PythonmysqlComponent;
  let fixture: ComponentFixture<PythonmysqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonmysqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonmysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
