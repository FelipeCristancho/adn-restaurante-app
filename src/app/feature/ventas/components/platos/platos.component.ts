import { Component, OnInit } from '@angular/core';
import { Plato } from '../../shared/model/plato';
import { VentasServiceService } from '../../shared/service/ventas-service.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  masVendido : Plato[] = [];
  platos: Plato[]  = []

  constructor(protected ventaService : VentasServiceService) { }

  ngOnInit(): void {
    this.obtenerMasVendido();
    this.ObtenerPlatos();
  }

  obtenerMasVendido(){
    this.ventaService.obtenerMejorPlato().subscribe(data => {
      this.masVendido = data;
      console.log(data);
    }, err => alert(err))
  }

  ObtenerPlatos(){
    this.ventaService.obtenerPlatos().subscribe(data => {
      this.platos = data;
      console.log(data);
    }, err => alert(err));
  }

}
