import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Cliente } from '../modelo/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL = '/restaurante/clientes';

  constructor(protected http : HttpService) { }

  public crear(cliente : Cliente){
    return this.http.doPost<Cliente, Boolean>(`${this.URL}`,cliente);
  }

  public listar(){
    return this.http.doGet<Cliente[]>(this.URL);
  }

  public obtenerMejorCliente(){
    return this.http.doGet<Cliente[]>(`${this.URL}/mejor`)
  }
}
