import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndAddClientComponent } from './search-and-add-client.component';

describe('SearchAndAddClientComponent', () => {
  let component: SearchAndAddClientComponent;
  let fixture: ComponentFixture<SearchAndAddClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndAddClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
