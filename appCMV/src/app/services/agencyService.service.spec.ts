/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgencyServiceService } from './agencyService.service';

describe('Service: AgencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgencyServiceService]
    });
  });

  it('should ...', inject([AgencyServiceService], (service: AgencyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
