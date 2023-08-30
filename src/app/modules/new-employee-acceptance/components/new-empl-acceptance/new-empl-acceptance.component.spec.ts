import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NewEmplAcceptanceComponent } from './new-empl-acceptance.component';
import { NewEmployeeService } from '../../services/new-employee.service';
import { Observable, of, throwError } from 'rxjs';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';
import { ToastrService } from 'ngx-toastr';

// Mock for NewEmployeeService
// Mock for NewEmployeeService
class MockNewEmployeeService {
  getEmployee$(cpf: string): Observable<EmployeeModel | undefined> {
    if (cpf === '12345678900') {
      const mockEmployee: EmployeeModel = {
        id: 1,
        name: 'John Doe',
        cpf: '12345678900',
        cpfSituation: 'Active',
        accountSituation: []
      };
      return of(mockEmployee);
    } else {
      return of(undefined);
    }
  }
}


// Mock for ToastrService
class MockToastrService {
  error(_: string) {}
}

describe('NewEmplAcceptanceComponent', () => {
  let fixture: ComponentFixture<NewEmplAcceptanceComponent>;
  let component: NewEmplAcceptanceComponent;
  let newEmplService: NewEmployeeService;
  let toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmplAcceptanceComponent],
      providers: [
        { provide: NewEmployeeService, useClass: MockNewEmployeeService },
        { provide: ToastrService, useClass: MockToastrService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEmplAcceptanceComponent);
    component = fixture.componentInstance;
    newEmplService = TestBed.inject(NewEmployeeService);
    toastr = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle existing employee', () => {
    const mockEmployee: EmployeeModel = {
      id: 1,
      name: 'John Doe',
      cpf: '12345678900',
      cpfSituation: 'Active',
      accountSituation: []
    };
    spyOn(newEmplService, 'getEmployee$').and.returnValue(of(mockEmployee));

    component.resCpfInput(mockEmployee.cpf);

    expect(component.cpfExist).toBe(true);
    expect(component.newAdmission).toBe(true);
    expect(component.employeeInputData).toBe(mockEmployee);
  });

  it('should handle non-existing employee', () => {
    spyOn(newEmplService, 'getEmployee$').and.returnValue(of(undefined));
    spyOn(toastr, 'error');

    component.resCpfInput('nonExistentCpf');

    expect(component.cpfExist).toBe(false);
    expect(component.newAdmission).toBeUndefined();
    expect(toastr.error).toHaveBeenCalledWith('CPF não encontrado');
  });

// ... 

it('should handle error', () => {
  const consoleErrorSpy = spyOn(console, 'error');
  spyOn(newEmplService, 'getEmployee$').and.returnValue(throwError (() => new Error('Test Error')));

  component.resCpfInput('errorCpf');

  expect(component.cpfExist).toBe(false); // Verifica se o CPF não existe
  expect(component.newAdmission).toBeUndefined(); // Verifica se não houve admissão

  fixture.whenStable().then(() => {
    fixture.detectChanges();
    console.assert(consoleErrorSpy.calls.count() === 1, 'console.error should have been called once with "Test Error"');
  });
});


// ...


  // Add more test cases if needed
});
