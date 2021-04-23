import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { VentasComponent } from './ventas.component';

describe('VentasComponent', () => {
  let component: VentasComponent;
  let fixture: ComponentFixture<VentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente ventas', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar los titulos de componentes',async(() =>{
    /*De esta manera se obtiene el valor del artefacto Html*/
    const ficture = TestBed.createComponent(VentasComponent);
    ficture.detectChanges();    
    /*De esta manera se obtiene el valor del artefacto Html por el ID */
    expect((document.getElementById('linkListarVentas')).textContent).toEqual('Listar Ventas');
    expect((document.getElementById('linkListarPlatos')).textContent).toEqual('Platos');
    expect((document.getElementById('linkComprar')).textContent).toEqual('Comprar');
  }));
});
