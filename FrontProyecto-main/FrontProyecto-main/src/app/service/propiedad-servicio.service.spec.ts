import { TestBed } from '@angular/core/testing';

import { PropiedadServicioService } from './propiedad-servicio.service';

describe('PropiedadServicioService', () => {
  let service: PropiedadServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropiedadServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
