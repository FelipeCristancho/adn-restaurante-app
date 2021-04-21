import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/modelo/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes : Cliente [] = [];
  MejorCliente : Cliente[] = []

  constructor(protected clienteService : ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
    this.getMejorCliente();
  }

  getClientes(){
      this.clienteService.listar().subscribe(data => {
        this.clientes = data;
        console.log(data);
      }, err => alert(err))
  }

  getMejorCliente(){
    this.clienteService.obtenerMejorCliente().subscribe(data => {
      this.MejorCliente = data;
      console.log(this.MejorCliente);
    }, err => alert(err));
  }

}
