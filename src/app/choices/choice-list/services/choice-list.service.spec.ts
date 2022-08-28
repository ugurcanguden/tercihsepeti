import { TestBed } from '@angular/core/testing';

import { ChoiceListService } from './choice-list.service';

describe('ChoiceListService', () => {
  let service: ChoiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
