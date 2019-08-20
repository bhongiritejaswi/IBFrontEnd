import { TestBed } from '@angular/core/testing';

import { CustAcclistServiceService } from './cust-acclist-service.service';

describe('CustAcclistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustAcclistServiceService = TestBed.get(CustAcclistServiceService);
    expect(service).toBeTruthy();
  });
});
