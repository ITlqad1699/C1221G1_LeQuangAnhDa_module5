import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVolcabulariesComponent } from './list-volcabularies.component';

describe('ListVolcabulariesComponent', () => {
  let component: ListVolcabulariesComponent;
  let fixture: ComponentFixture<ListVolcabulariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVolcabulariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVolcabulariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
