import { TestBed } from '@angular/core/testing';

import { SerductService } from './serduct.service';

describe('SerductService', () => {
  let service: SerductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
