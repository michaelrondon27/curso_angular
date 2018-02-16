import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Michael",
    apellido: "Rondon",
    correo: ""
  }

  constructor() { }

  guardar( forma:NgForm ){
    console.log( "ngFrom ", forma );
    console.log("Valor forma", forma.value );
    console.log("Usuario", this.usuario )
  }

}
