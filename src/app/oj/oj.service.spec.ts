/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OjService } from './oj.service';

describe('OjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OjService]
    });
  });

  it('should ...', inject([OjService], (service: OjService) => {
    expect(service).toBeTruthy();
  }));
});
