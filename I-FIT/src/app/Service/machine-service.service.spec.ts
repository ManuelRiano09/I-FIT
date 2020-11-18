import { TestBed } from '@angular/core/testing';

import { MachineServiceService } from './machine-service.service';

describe('MachineServiceService', () => {
  let service: MachineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
