import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../shared/service/cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;
  

  constructor(protected clienteServicio : ClienteService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(){
    this.clienteServicio.crear(this.clienteForm.value).subscribe(() => {
      this.mostrarAlertaOk()
      this.clienteForm.reset();
    }, err => this.mostrarAlertaError(err));
  }

  private mostrarAlertaOk(){
    Swal.fire({
      icon: 'success',
      title: 'Cliente creado correctamente',
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
    this.clienteForm = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
    });
  }

}
