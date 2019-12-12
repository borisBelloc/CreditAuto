import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsearchComponent } from './contractsearch.component';

describe('ContractsearchComponent', () => {
  let component: ContractsearchComponent;
  let fixture: ComponentFixture<ContractsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
