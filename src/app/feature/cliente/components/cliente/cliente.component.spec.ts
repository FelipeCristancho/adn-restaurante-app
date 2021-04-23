import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente cliente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar los titulos de componentes',async(() =>{
    /*De esta manera se obtiene el valor del artefacto Html*/
    const ficture = TestBed.createComponent(ClienteComponent);
    ficture.detectChanges();    
    /*De esta manera se obtiene el valor del artefacto Html por el ID */
    expect((<HTMLInputElement>document.getElementById('linkListarCliente')).textContent).toEqual('Listar');
    expect((<HTMLInputElement>document.getElementById('linkCrearCliente')).textContent).toEqual('Crear Cliente');
  }));
  
});
