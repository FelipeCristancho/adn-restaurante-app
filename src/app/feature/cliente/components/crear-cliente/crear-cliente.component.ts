import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../shared/service/cliente.service';

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
    this.clienteServicio.crear(this.clienteForm.value).subscribe((data) => {
      console.log(data);
      //alert('Cliente creado correctamente');
    }, err => alert(err.error.mensaje));
    this.clienteForm.reset();
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
