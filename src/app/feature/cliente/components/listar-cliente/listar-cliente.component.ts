import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/modelo/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public MejorCliente : Observable<Cliente[]>;
  public listaClientes: Observable<Cliente[]>;

  constructor(protected clienteService : ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
    this.getMejorCliente();
  }

  getMejorCliente(){
    this.MejorCliente = this.clienteService.obtenerMejorCliente();
  }

  listarClientes(){
    this.listaClientes = this.clienteService.listar();
  }
}
