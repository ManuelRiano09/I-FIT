import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginAprendizComponent } from './form-login-aprendiz.component';

describe('FormLoginAprendizComponent', () => {
  let component: FormLoginAprendizComponent;
  let fixture: ComponentFixture<FormLoginAprendizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginAprendizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
