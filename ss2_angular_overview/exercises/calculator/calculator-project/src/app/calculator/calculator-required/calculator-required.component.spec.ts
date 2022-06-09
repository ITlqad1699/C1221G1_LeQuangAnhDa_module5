import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorRequiredComponent } from './calculator-required.component';

describe('CalculatorRequiredComponent', () => {
  let component: CalculatorRequiredComponent;
  let fixture: ComponentFixture<CalculatorRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
