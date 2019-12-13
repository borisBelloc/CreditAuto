import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransionscreenComponent } from './transionscreen.component';

describe('TransionscreenComponent', () => {
  let component: TransionscreenComponent;
  let fixture: ComponentFixture<TransionscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransionscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransionscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
