import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VentasServiceService } from '../../shared/service/ventas-service.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  compraForm: FormGroup;

  constructor(protected ventasService : VentasServiceService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  comprar(){
    this.ventasService.crear(this.compraForm.value).subscribe(()=> {
     //alert('Compra realizada');
      }, err => alert(err.error.mensaje));
  }

  private construirFormulario(){
    this.compraForm = new FormGroup({
      cliente: new FormControl('', [Validators.required]),
      plato: new FormControl('', [Validators.required])
    });
  }

}
