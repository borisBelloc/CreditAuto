import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansimulateComponent } from './loansimulate.component';

describe('LoansimulateComponent', () => {
  let component: LoansimulateComponent;
  let fixture: ComponentFixture<LoansimulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansimulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
