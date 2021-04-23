import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { ListarVentasComponent } from './listar-ventas.component';
import { VentasServiceService } from '../../shared/service/ventas-service.service';
import { Venta } from '../../shared/model/venta';

describe('ListarVentasComponent', () => {
  let component: ListarVentasComponent;
  let fixture: ComponentFixture<ListarVentasComponent>;
  let ventaServicio : VentasServiceService;
  const listaVenta : Venta[] = [new Venta('1','1','1','20000','2021-04-20',true)];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVentasComponent ], 
      providers : [VentasServiceService, HttpService],
      imports : [
        HttpClientTestingModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentasComponent);
    component = fixture.componentInstance;
    ventaServicio = TestBed.inject(VentasServiceService);
    spyOn(ventaServicio, 'getVentas').and.returnValue(of(listaVenta))
    fixture.detectChanges();
  });

  it('Debería listar todos los registros', async(() => {
    expect(component).toBeTruthy();
    component.listaVentas.subscribe(resultado => {
      expect(resultado.length).toBe(1);
    });
  }));

  it('Debería validar el titulo del formulario', async(() => {
    /*De esta manera se obtiene el valor del artefacto Html*/
    const ficture = TestBed.createComponent(ListarVentasComponent);
    ficture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Todas las ventas');
    expect(compiled.querySelector('h3').textContent).toContain('Ventas de un Cliente');
  }));
});
