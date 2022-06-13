import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAngularComponent } from './login-angular.component';

describe('LoginAngularComponent', () => {
  let component: LoginAngularComponent;
  let fixture: ComponentFixture<LoginAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
