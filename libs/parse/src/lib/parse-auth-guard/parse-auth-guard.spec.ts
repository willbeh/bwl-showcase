import { TestBed } from '@angular/core/testing';

import { ParseAuthGuard } from './parse-auth-guard';

describe('ParseAuthGuard', () => {
  let service: ParseAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
