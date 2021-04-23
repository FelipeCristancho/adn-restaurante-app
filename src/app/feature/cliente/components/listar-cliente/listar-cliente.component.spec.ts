import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import {ClienteService} from '../../shared/service/cliente.service';

import { ListarClienteComponent } from './listar-cliente.component';
import { Cliente } from '../../shared/modelo/cliente';
import { CommonModule } from '@angular/common';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let clienteServicio: ClienteService;
  const listarCliente: Cliente[] = [new Cliente('1','1','Felipe','cristancho','320245547', '20')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent ],
      providers : [ClienteService, HttpService],
      imports : [HttpClientTestingModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    clienteServicio = TestBed.inject(ClienteService);
    spyOn(clienteServicio,'listar').and.returnValue(of(listarCliente));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería listar todos los registros', async(() => {
    expect(component).toBeTruthy();
    component.listaClientes.subscribe(resultado => {
      expect(resultado.length).toBe(1);
    });
  }));

  it('Debería validar el titulo del formulario', async(() => {
    /*De esta manera se obtiene el valor del artefacto Html*/
    const ficture = TestBed.createComponent(ListarClienteComponent);
    ficture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Todos los clientes');
    expect(compiled.querySelector('h3').textContent).toContain('Cliente que mas compro');
  }));
});
