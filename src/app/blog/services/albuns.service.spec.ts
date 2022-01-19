import { TestBed } from '@angular/core/testing';

import { AlbunsService } from './albuns.service';

describe('AlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbunsService = TestBed.get(AlbunsService);
    expect(service).toBeTruthy();
  });
});
