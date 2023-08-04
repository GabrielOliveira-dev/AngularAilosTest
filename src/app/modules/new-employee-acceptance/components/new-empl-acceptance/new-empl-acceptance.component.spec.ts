import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmplAcceptanceComponent } from './new-empl-acceptance.component';

describe('NewEmplAcceptanceComponent', () => {
  let component: NewEmplAcceptanceComponent;
  let fixture: ComponentFixture<NewEmplAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmplAcceptanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmplAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
