import { TestBed } from '@angular/core/testing';

import { ClassemnetEquipesService } from './classemnet-equipes.service';

describe('ClassemnetEquipesService', () => {
  let service: ClassemnetEquipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassemnetEquipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
