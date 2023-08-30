import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { NewEmployeeCardsComponent } from './new-employee-cards.component';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';

// Mock for EmployeeModel
class MockEmployeeModel implements EmployeeModel {
  id: number = 1;
  name: string = 'John Doe';
  cpf: string = '12345678900';
  cpfSituation: string = 'Active';
  accountSituation: any[] = [];
}

@Component({ selector: 'app-card', template: '' })
class MockCardComponent {
  @Input() cardData!: EmployeeModel;
}

describe('NewEmployeeCardsComponent', () => {
  let fixture: ComponentFixture<NewEmployeeCardsComponent>;
  let component: NewEmployeeCardsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmployeeCardsComponent, MockCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEmployeeCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set employeeData from input', () => {
    const mockEmployee: EmployeeModel = new MockEmployeeModel();
    component.employeeInputData = mockEmployee;

    expect(component.employeeData).toBe(mockEmployee);
  });

  // Add more test cases if needed
});
