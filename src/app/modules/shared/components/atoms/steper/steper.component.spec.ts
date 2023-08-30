import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SteperComponent } from './steper.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Mock for UntypedFormBuilder
class MockUntypedFormBuilder {
  group(_: any): UntypedFormGroup {
    return new MockUntypedFormGroup();
  }
}

// Mock for UntypedFormGroup
class MockUntypedFormGroup extends UntypedFormGroup {
  // Implement required methods and properties here
  constructor() {
    super({});
  }
}

@Component({ selector: 'mat-horizontal-stepper', template: '' })
class MockMatHorizontalStepperComponent {}

@Component({ selector: 'mat-step', template: '' })
class MockMatStepComponent {}

describe('SteperComponent', () => {
  let fixture: ComponentFixture<SteperComponent>;
  let component: SteperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteperComponent, MockMatHorizontalStepperComponent, MockMatStepComponent],
      providers: [{ provide: UntypedFormBuilder, useClass: MockUntypedFormBuilder }]
    }).compileComponents();

    fixture = TestBed.createComponent(SteperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form groups', () => {
    component.ngOnInit();
    expect(component.firstFormGroup).toBeDefined();
    expect(component.secondFormGroup).toBeDefined();
    expect(component.thirdFormGroup).toBeDefined();
    expect(component.fourthFormGroup).toBeDefined();
  });

  // Add more test cases if needed
});
