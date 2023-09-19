import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewEmployeeInputComponent } from './new-employee-input.component';
import { FormBuilder } from '@angular/forms';
import { NewEmployeeService } from '../../../services/new-employee.service';
import { ToastrService, ToastrModule  } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

describe('NewEmployeeInputComponent', () => {
  let component: NewEmployeeInputComponent;
  let fixture: ComponentFixture<NewEmployeeInputComponent>;
  let emplService: NewEmployeeService;
  let toastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEmployeeInputComponent],
      providers: [FormBuilder, NewEmployeeService, ToastrService],
      imports: [HttpClientModule, ToastrModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeInputComponent);
    component = fixture.componentInstance;
    emplService = TestBed.inject(NewEmployeeService);
    toastr = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cpfInput event with valid CPF', () => {
    spyOn(emplService, 'isValidCPF').and.returnValue(true);
    spyOn(component.cpfInput, 'emit');

    component.newEmplForm.controls['cpf'].setValue('12345678909');
    component.onSubmit();

    expect(emplService.isValidCPF).toHaveBeenCalledWith('12345678909');
    expect(component.cpfInput.emit).toHaveBeenCalledWith('12345678909');
  });

  it('should show error toastr and throw error with invalid CPF', () => {
    spyOn(emplService, 'isValidCPF').and.returnValue(false);
    spyOn(toastr, 'error');

    component.newEmplForm.controls['cpf'].setValue('invalidCPF');
    expect(() => component.onSubmit()).toThrowError('CPF inválido');

    expect(emplService.isValidCPF).toHaveBeenCalledWith('invalidCPF');
    expect(toastr.error).toHaveBeenCalledWith('CPF inválido');
  });
});
