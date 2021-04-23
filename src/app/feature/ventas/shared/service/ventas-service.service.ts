import { Injectable } from '@angular/core';
import { Venta } from '../model/venta';
import {HttpService} from '@core-service/http.service';
import { Plato } from '../model/plato';

@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {

  private URL = '/restaurante/ventas';
  
  private URL_PLATOS = '/restaurante/platos';

  constructor(private http : HttpService) { }

  getVentas(){
    return this.http.doGet<Venta[]>(this.URL);
  }

  getVentasUsuario(dni){
    return this.http.doGet<Venta[]>(`${this.URL}/cliente/${dni}`);
  }

  public crear(venta : Venta){
    return this.http.doPost<Venta, boolean>(`${this.URL}`,venta);
  }

  public obtenerMejorPlato(){
    return this.http.doGet<Plato[]>(`${this.URL_PLATOS}/mejor`);
  }

  public obtenerPlatos(){
    return this.http.doGet<Plato[]>(this.URL_PLATOS);
  }
}
