import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewEmployeeInputComponent } from './new-employee-input.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app-form', template: '' })
class MockFormComponent {
  @Input() formGroup!: FormGroup;
}

describe('NewEmployeeInputComponent', () => {
  let fixture: ComponentFixture<NewEmployeeInputComponent>;
  let component: NewEmployeeInputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmployeeInputComponent, MockFormComponent],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEmployeeInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize newEmplForm with cpf input', () => {
    component.ngOnInit();
    expect(component.newEmplForm).toBeDefined();
    expect(component.newEmplForm.get('cpf')).toBeDefined();
  });

  it('should emit cpfInput event on valid form submission', () => {
    const mockCpf = '12345678900';
    component.cpfExist = false;
    component.ngOnInit();

    const emitSpy = spyOn(component.cpfInput, 'emit');
    component.newEmplForm.patchValue({ cpf: mockCpf });
    component.onSubmit();

    expect(emitSpy).toHaveBeenCalledWith(mockCpf);
  });

  it('should not emit cpfInput event on invalid form submission', () => {
    component.cpfExist = false;
    component.ngOnInit();

    const emitSpy = spyOn(component.cpfInput, 'emit');
    component.onSubmit();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  // Add more test cases if needed
});
