import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { CardComponent } from './card.component';
import { EmployeeModel, AccountSituation } from 'src/app/modules/models/interfaces/IEmployee';

// Mock for EmployeeModel
class MockEmployeeModel implements EmployeeModel {
  id: number = 1;
  name: string = 'John Doe';
  cpf: string = '12345678900';
  cpfSituation: string = 'Active';
  accountSituation: AccountSituation[] = [{
    accountType: 'Savings',
    numberAccount: '123456789',
    cooperativeName: 'Example Cooperative'
  }];
}

@Component({ selector: 'ailos-card', template: '' })
class MockCardComponent {
  @Input() cardData!: EmployeeModel;
}

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, MockCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input property cardData', () => {
    const mockEmployee: EmployeeModel = new MockEmployeeModel();
    component.cardData = mockEmployee;
    expect(component.cardData).toBe(mockEmployee);
  });

  // Add more test cases if needed
});
