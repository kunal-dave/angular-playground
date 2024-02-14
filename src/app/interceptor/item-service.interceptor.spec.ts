import { TestBed } from '@angular/core/testing';

import { ItemServiceInterceptor } from './item-service.interceptor';

describe('ItemServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ItemServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ItemServiceInterceptor = TestBed.inject(ItemServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
