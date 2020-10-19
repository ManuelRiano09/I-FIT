import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginInstructorComponent } from './form-login-instructor.component';

describe('FormLoginInstructorComponent', () => {
  let component: FormLoginInstructorComponent;
  let fixture: ComponentFixture<FormLoginInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
