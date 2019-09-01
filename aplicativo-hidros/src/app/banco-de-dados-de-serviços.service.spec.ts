import { TestBed } from '@angular/core/testing';

import { BancoDeDadosDeServiçosService } from './banco-de-dados-de-serviços.service';

describe('BancoDeDadosDeServiçosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BancoDeDadosDeServiçosService = TestBed.get(BancoDeDadosDeServiçosService);
    expect(service).toBeTruthy();
  });
});
