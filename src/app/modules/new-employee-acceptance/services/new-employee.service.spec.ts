import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NewEmployeeService } from './new-employee.service';
import { EmployeeModel } from '../../models/interfaces/IEmployee';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('NewEmployeeService', () => {
  let service: NewEmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewEmployeeService],
    });
    service = TestBed.inject(NewEmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return employee data from mock when mockData is true', () => {
    // Arrange
    service.mockData = true;
    const mockEmployee: EmployeeModel = {
      applicationAccount: {
        accountNumber: '55555',
        situation: 'teste',
      },
      checkingAccount: {
        cpfStatus: 'teste',
        name: 'teste',
        registerSituation: 'teste',
      },
      situation: {
        cpfStatus: 'teste',
        name: 'teste',
        registerSituation: 'teste',
      },
    };

    // Act & Assert
    service.getEmployeeData$('mock_cpf').subscribe((data) => {
      expect(data).toEqual(mockEmployee);
    });
  });

  it('should make an HTTP GET request when mockData is false', () => {
    // Arrange
    service.mockData = false;
    const mockEmployee: any = {
      // Add your expected response data for the HTTP GET request here
    };

    // Act
    service.getEmployeeData$('mock_cpf').subscribe();

    // Assert
    const req = httpMock.expectOne(`${environment.BACKEND_URL}/mock_cpf`);
    expect(req.request.method).toBe('GET');
    // Respond with mockEmployee data
    req.flush(mockEmployee);
  });
});
