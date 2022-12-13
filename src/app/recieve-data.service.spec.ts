import { TestBed } from '@angular/core/testing';

import { RecieveDataService } from './recieve-data.service';

describe('RecieveDataService', () => {
  let service: RecieveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
