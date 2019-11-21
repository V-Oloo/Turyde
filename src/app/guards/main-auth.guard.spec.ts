import { TestBed, async, inject } from '@angular/core/testing';

import { MainAuthGuard } from './main-auth.guard';

describe('MainAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainAuthGuard]
    });
  });

  it('should ...', inject([MainAuthGuard], (guard: MainAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
