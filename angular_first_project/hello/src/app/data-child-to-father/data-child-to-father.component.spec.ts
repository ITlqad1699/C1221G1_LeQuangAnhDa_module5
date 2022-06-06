import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChildToFatherComponent } from './data-child-to-father.component';

describe('DataChildToFatherComponent', () => {
  let component: DataChildToFatherComponent;
  let fixture: ComponentFixture<DataChildToFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataChildToFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChildToFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
