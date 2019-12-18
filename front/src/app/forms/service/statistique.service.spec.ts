import { TestBed } from '@angular/core/testing';

import { StatistiqueService } from './statistique.service';

describe('StatistiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistiqueService = TestBed.get(StatistiqueService);
    expect(service).toBeTruthy();
  });
});
