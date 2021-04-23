import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { PlatosComponent } from './platos.component';
import { VentasServiceService } from '../../shared/service/ventas-service.service';
import { Plato } from '../../shared/model/plato';

describe('PlatosComponent', () => {
  let component: PlatosComponent;
  let fixture: ComponentFixture<PlatosComponent>;
  let ventaServicio : VentasServiceService;
  const listaPlatos: Plato[] = [new Plato('1','test','30000','2')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosComponent ],
      providers : [
        VentasServiceService,
        HttpService
      ],
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
    fixture = TestBed.createComponent(PlatosComponent);
    component = fixture.componentInstance;
    ventaServicio = TestBed.inject(VentasServiceService);
    spyOn(ventaServicio,'obtenerPlatos').and.returnValue(of(listaPlatos));
    fixture.detectChanges();
  });

  it('Deberia listar todos los platos', async(()=> {
    expect(component).toBeTruthy();
    component.listaPlatos.subscribe(resultado => {
      expect(resultado.length).toBe(1);
    })
  }));
  
});
