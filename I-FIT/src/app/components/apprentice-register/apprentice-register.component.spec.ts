import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeRegisterComponent } from './apprentice-register.component';

describe('ApprenticeRegisterComponent', () => {
  let component: ApprenticeRegisterComponent;
  let fixture: ComponentFixture<ApprenticeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
