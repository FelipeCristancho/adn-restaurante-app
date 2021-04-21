import { Component, OnInit } from '@angular/core';
import { VentasServiceService } from '../../shared/service/ventas-service.service';
import { Venta } from '../../shared/model/venta';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})
export class ListarVentasComponent implements OnInit {

  ventas : Venta[] = [];
  ventasUsuario:Venta[] = []
  dni = "";

  constructor(private ventasService : VentasServiceService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(){
    this.ventasService.getVentas().subscribe(data => {
      this.ventas = data;
    }, err => console.log(err));    
  }

  getVentasUsuario(){
    this.ventasService.getVentasUsuario(this.dni)
    .subscribe( data => {
      this.ventasUsuario = data;
    }, err => console.log(err));
  }

}
