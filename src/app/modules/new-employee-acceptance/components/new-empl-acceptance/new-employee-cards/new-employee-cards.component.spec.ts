import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeCardsComponent } from './new-employee-cards.component';

describe('NewEmployeeCardsComponent', () => {
  let component: NewEmployeeCardsComponent;
  let fixture: ComponentFixture<NewEmployeeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
