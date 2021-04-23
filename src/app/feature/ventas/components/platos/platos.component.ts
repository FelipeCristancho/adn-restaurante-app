import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plato } from '../../shared/model/plato';
import { VentasServiceService } from '../../shared/service/ventas-service.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  public masVendido : Observable<Plato[]>;
  public listaPlatos : Observable<Plato[]>;

  constructor(protected ventaService : VentasServiceService) { }

  ngOnInit(): void {
    this.obtenerMasVendido();
    this.ObtenerPlatos();
  }

  obtenerMasVendido(){
    this.masVendido = this.ventaService.obtenerMejorPlato();
  }

  ObtenerPlatos(){
    this.listaPlatos = this.ventaService.obtenerPlatos();
  }

}
