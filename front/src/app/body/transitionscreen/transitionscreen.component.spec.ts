import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionscreenComponent } from './transitionscreen.component';

describe('TransitionscreenComponent', () => {
  let component: TransitionscreenComponent;
  let fixture: ComponentFixture<TransitionscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
