import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContratComponent } from './create-contrat.component';

describe('CreateContratComponent', () => {
  let component: CreateContratComponent;
  let fixture: ComponentFixture<CreateContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
