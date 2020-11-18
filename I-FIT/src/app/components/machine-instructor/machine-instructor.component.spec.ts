import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineInstructorComponent } from './machine-instructor.component';

describe('MachineInstructorComponent', () => {
  let component: MachineInstructorComponent;
  let fixture: ComponentFixture<MachineInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
