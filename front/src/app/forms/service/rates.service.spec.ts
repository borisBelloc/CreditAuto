import { TestBed } from '@angular/core/testing';

import { RatesService } from './rates.service';

describe('RatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatesService = TestBed.get(RatesService);
    expect(service).toBeTruthy();
  });
});
