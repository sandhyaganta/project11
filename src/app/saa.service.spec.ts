import { TestBed } from '@angular/core/testing';

import { SaaService } from './saa.service';

describe('SaaService', () => {
  let service: SaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
