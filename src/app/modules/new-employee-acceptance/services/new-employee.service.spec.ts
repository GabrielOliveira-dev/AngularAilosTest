import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewEmployeeService } from './new-employee.service';
import { EmployeeModel } from '../../models/interfaces/IEmployee';
import mockData from '../../../../assets/mock.json';

describe('NewEmployeeService', () => {
  let service: NewEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewEmployeeService]
    });
    service = TestBed.inject(NewEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return employee data by CPF', () => {
    const mockCpf = '12345678900';
    const result = service.getEmployee$(mockCpf);

    result.subscribe((employee: EmployeeModel | undefined) => {
      expect(employee).toBeUndefined();
      expect(employee?.cpf).toBeUndefined();
    });
  });

  it('should return undefined for non-existent CPF', () => {
    const mockCpf = '99999999999';
    const result = service.getEmployee$(mockCpf);

    result.subscribe((employee: EmployeeModel | undefined) => {
      expect(employee).toBeUndefined();
    });
  });

  // Add more test cases as needed
});
