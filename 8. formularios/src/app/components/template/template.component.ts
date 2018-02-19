import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta: false
  }

  paises = [
    {
      codigo: "VZLA",
      nombre: "Venezuela"
    },
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ];

  sexos:string[] = ["Hombre", "Mujer"];

  constructor() { }

  guardar( forma:NgForm ){
    console.log( "ngFrom ", forma );
    console.log("Valor forma", forma.value );
    console.log("Usuario", this.usuario )
  }

}
