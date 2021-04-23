import { Component, OnInit } from '@angular/core';
import { VentasServiceService } from '../../shared/service/ventas-service.service';
import { Venta } from '../../shared/model/venta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})
export class ListarVentasComponent implements OnInit {

  dni = "";
  public listaVentas: Observable<Venta[]>;
  public listaVentasUsuario : Observable<Venta[]>

  constructor(private ventasService : VentasServiceService) { }

  ngOnInit(): void {
    this.listarVentas();
  }

  getVentasUsuario(){
    this.listaVentasUsuario = this.ventasService.getVentasUsuario(this.dni);    
  }

  listarVentas(){
    this.listaVentas = this.ventasService.getVentas();
  }

}
