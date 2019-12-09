import { TestBed } from '@angular/core/testing';

import { CreateloanService } from './createloan.service';

describe('CreateloanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateloanService = TestBed.get(CreateloanService);
    expect(service).toBeTruthy();
  });
});
