import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MenuSideComponent } from './menu-side.component';

@Component({ selector: 'mat-icon', template: '' })
class MockMatIconComponent {}

@Component({ selector: 'mat-list-item', template: '' })
class MockMatListItemComponent {}

describe('MenuSideComponent', () => {
  let fixture: ComponentFixture<MenuSideComponent>;
  let component: MenuSideComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSideComponent, MockMatIconComponent, MockMatListItemComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSideComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to route', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mockRoute = '/example';
    component.navigate(mockRoute);
    expect(navigateSpy).toHaveBeenCalledWith([mockRoute]);
  });

  // Add more test cases if needed
});
