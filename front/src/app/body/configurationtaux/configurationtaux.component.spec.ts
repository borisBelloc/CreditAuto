import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationtauxComponent } from './configurationtaux.component';

describe('ConfigurationtauxComponent', () => {
  let component: ConfigurationtauxComponent;
  let fixture: ComponentFixture<ConfigurationtauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationtauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationtauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
