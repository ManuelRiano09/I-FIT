import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeModuleComponent } from './apprentice-module.component';

describe('ApprenticeModuleComponent', () => {
  let component: ApprenticeModuleComponent;
  let fixture: ComponentFixture<ApprenticeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
