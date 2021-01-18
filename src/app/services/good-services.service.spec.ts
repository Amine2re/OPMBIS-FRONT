import { TestBed } from '@angular/core/testing';

import { GoodServicesService } from './good-services.service';

describe('GoodServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodServicesService = TestBed.get(GoodServicesService);
    expect(service).toBeTruthy();
  });
});
