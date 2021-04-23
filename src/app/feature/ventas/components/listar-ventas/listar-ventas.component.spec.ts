import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ListarVentasComponent } from './listar-ventas.component';

describe('ListarVentasComponent', () => {
  let component: ListarVentasComponent;
  let fixture: ComponentFixture<ListarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería listar todos los registros', async(() => {
    expect(component).toBeTruthy();
    component.listaVentas.subscribe(resultado => {
      expect(40).toBeLessThanOrEqual(resultado.length);
    })
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
