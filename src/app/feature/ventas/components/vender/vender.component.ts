import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VentasServiceService } from '../../shared/service/ventas-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-comprar',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class ComprarComponent implements OnInit {

  compraForm: FormGroup;

  constructor(protected ventasService : VentasServiceService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  comprar(){
    this.ventasService.crear(this.compraForm.value).subscribe(()=> {
      this.mostrarAlertaOk();
      this.compraForm.reset();
      }, err => this.mostrarAlertaError(err));
  }

  private mostrarAlertaOk(){
    Swal.fire({
      icon: 'success',
      title: 'Venta realizada',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private mostrarAlertaError(err){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: err.error.mensaje        
    })
  }  

  private construirFormulario(){
    this.compraForm = new FormGroup({
      cliente: new FormControl('', [Validators.required]),
      plato: new FormControl('', [Validators.required])
    });
  }

}
