import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnComponentLifeComponent } from './an-component-life.component';

describe('AnComponentLifeComponent', () => {
  let component: AnComponentLifeComponent;
  let fixture: ComponentFixture<AnComponentLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnComponentLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnComponentLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
