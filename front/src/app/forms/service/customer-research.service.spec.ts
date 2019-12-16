import { TestBed } from '@angular/core/testing';

import { CustomerResearchService } from './customer-research.service';

describe('CustomerResearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerResearchService = TestBed.get(CustomerResearchService);
    expect(service).toBeTruthy();
  });
});
