import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSetupFormComponent } from './car-setup-form.component';

describe('CarSetupFormComponent', () => {
  let component: CarSetupFormComponent;
  let fixture: ComponentFixture<CarSetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarSetupFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
