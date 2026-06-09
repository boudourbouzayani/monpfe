import { TestBed } from '@angular/core/testing';

import { SimulerserviceService } from './simulerservice.service';

describe('SimulerserviceService', () => {
  let service: SimulerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
