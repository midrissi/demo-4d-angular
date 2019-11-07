import { TestBed } from '@angular/core/testing';

import { 4dService } from './4d.service';

describe('4dService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: 4dService = TestBed.get(4dService);
    expect(service).toBeTruthy();
  });
});
