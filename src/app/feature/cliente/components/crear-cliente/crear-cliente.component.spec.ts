import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { CrearClienteComponent } from './crear-cliente.component';

describe('CrearClienteComponent', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService : ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearClienteComponent ],
      imports: [CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [ClienteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
