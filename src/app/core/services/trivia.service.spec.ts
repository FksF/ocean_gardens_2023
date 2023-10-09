import { TestBed } from '@angular/core/testing';

import { TriviaService } from '../../pages/trivia/trivia.service';

describe('TriviaService', () => {
  let service: TriviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
