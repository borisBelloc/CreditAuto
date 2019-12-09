import { TestBed } from '@angular/core/testing';

import { LoanCalculService } from './loan-calcul.service';

describe('LoanCalculService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanCalculService = TestBed.get(LoanCalculService);
    expect(service).toBeTruthy();
  });
});
