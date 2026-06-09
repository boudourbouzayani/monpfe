import { TestBed } from '@angular/core/testing';

import { DemandedocumentService } from './demandedocument.service';

describe('DemandedocumentService', () => {
  let service: DemandedocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandedocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
