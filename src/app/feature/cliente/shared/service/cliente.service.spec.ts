import { TestBed } from '@angular/core/testing';
//import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';

import { ClienteService } from './cliente.service';
import { Cliente } from '../modelo/cliente';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;
  const API_ENDPOINT_CLIENTES_CONSULTA = `/restaurante/clientes`;

  beforeEach(() => {
    const INJECTOR = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = INJECTOR.inject(HttpTestingController)
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const clienteServicio : ClienteService = TestBed.inject(ClienteService);
    expect(clienteServicio).toBeTruthy();
  });

  it('Deberia listar los clientes', () => {
    const clientes = [new Cliente('1','1','test','test','3212353464','30')];

    service.listar().subscribe(result => {
        expect(result.length).toBe(1);
        expect(clientes).toEqual(result);
    });

    const req = httpMock.expectOne(API_ENDPOINT_CLIENTES_CONSULTA);
    expect(req.request.method).toBe('GET');
    req.flush(clientes);
  })
});
