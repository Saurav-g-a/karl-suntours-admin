import { TestBed } from '@angular/core/testing';

import { DbioService } from './dbio.service';

describe('DbioService', () => {
  let service: DbioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
