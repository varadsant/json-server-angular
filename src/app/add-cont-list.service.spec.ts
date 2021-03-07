import { TestBed } from '@angular/core/testing';

import { AddContListService } from './add-cont-list.service';

describe('AddContListService', () => {
  let service: AddContListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddContListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
