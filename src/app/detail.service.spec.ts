import { TestBed, inject } from '@angular/core/testing';

import { DetailService } from './detail.service';

describe('PersonalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailService]
    });
  });

  it('should be created', inject([DetailService], (service: DetailService) => {
    expect(service).toBeTruthy();
  }));
  
});
