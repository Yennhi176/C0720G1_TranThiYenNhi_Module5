import { TestBed, inject } from '@angular/core/testing';
import {DateUtilService} from './DateUtilService';



describe('DateUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilService]
    });
  });

  it('should be created', inject([DateUtilService], (service: DateUtilService) => {
    expect(service).toBeTruthy();
  }));
});
