import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ListarClienteComponent } from './listar-cliente.component';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería listar todos los registros', async(() => {
    expect(component).toBeTruthy();
    component.listaClientes.subscribe(resultado => {
      expect(resultado.length).toBeGreaterThan(1);
    })
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
