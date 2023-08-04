import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeInputComponent } from './new-employee-input.component';

describe('NewEmployeeInputComponent', () => {
  let component: NewEmployeeInputComponent;
  let fixture: ComponentFixture<NewEmployeeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
