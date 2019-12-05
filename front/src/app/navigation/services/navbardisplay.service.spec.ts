import { TestBed } from '@angular/core/testing';

import { NavbardisplayService } from './navbardisplay.service';

describe('NavbardisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbardisplayService = TestBed.get(NavbardisplayService);
    expect(service).toBeTruthy();
  });
});
