import { TestBed } from '@angular/core/testing';
import { NewEmployeeService } from './new-employee.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewEmployeeService', () => {
  let service: NewEmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an employee by CPF', (done) => {
  const validCPF = '12345678909'; // CPF válido que existe no seu mockData

  const employee = service.getEmployee$(validCPF);

  employee.subscribe((result) => {
    // Verifique se o objeto retornado não é indefinido
    expect(result).not.toBeUndefined();

    if (result) {
      // Verifique se o CPF no objeto retornado corresponde ao CPF fornecido
      expect(result.cpf).toEqual(validCPF);
      // Outros testes que você desejar fazer com os dados retornados

      done(); // Chame done() para indicar que o teste está completo
    }
  });
});

  

  it('should return undefined for non-existent CPF', () => {
    const cpf = '00000000000'; // CPF que não existe no seu mockData

    const employee = service.getEmployee$(cpf);

    employee.subscribe((result) => {
      expect(result).toBeUndefined();
    });
  });

  it('should validate a valid CPF', () => {
    const validCPF = '12345678909';

    const isValid = service.isValidCPF(validCPF);

    expect(isValid).toBeTrue();
  });

  it('should invalidate an invalid CPF', () => {
    const invalidCPF = '00000000000';

    const isValid = service.isValidCPF(invalidCPF);

    expect(isValid).toBeFalse();
  });
});
