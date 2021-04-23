import { TestBed } from '@angular/core/testing';
//import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';

import { VentasServiceService } from './ventas-service.service';
import { Venta } from '../model/venta';

describe('VentasServiceService', () => {
  let service: VentasServiceService;

  let httpMock: HttpTestingController;
  const API_ENDPOINT_VENTAS_CONSULTA = `/restaurante/ventas`;

  beforeEach(() => {
    const INJECTOR = TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [VentasServiceService, HttpService]
    });
    httpMock = INJECTOR.inject(HttpTestingController);
    service = TestBed.inject(VentasServiceService);
  });

  it('should be created', () => {
    const ventaServicio: VentasServiceService = TestBed.inject(VentasServiceService);
    expect(ventaServicio).toBeTruthy();
  });

  it('Debería listar las ventas', () => {
    const ventas = [new Venta('1','1','1','10000','2021-04-20',true)];

    service.getVentas().subscribe(result => {
      expect(result.length).toBe(1);
      expect(result).toEqual(ventas);
    });

    const req = httpMock.expectOne(API_ENDPOINT_VENTAS_CONSULTA);
    expect(req.request.method).toBe('GET');
    req.flush(ventas);
  });
});
