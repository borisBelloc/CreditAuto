import { TestBed } from '@angular/core/testing';

import { ClientCreateService } from './client-create.service';

describe('ClientCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientCreateService = TestBed.get(ClientCreateService);
    expect(service).toBeTruthy();
  });
});
