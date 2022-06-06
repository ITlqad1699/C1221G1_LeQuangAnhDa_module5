import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleNgCssComponent } from './style-ng-css.component';

describe('StyleNgCssComponent', () => {
  let component: StyleNgCssComponent;
  let fixture: ComponentFixture<StyleNgCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleNgCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleNgCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
