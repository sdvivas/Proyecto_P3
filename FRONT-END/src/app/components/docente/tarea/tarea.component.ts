import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  user = {
    APELLIDO: '',
    CEDULA: '',
    CLAVE: '',
    COD_PERSONA: '',
    COD_PERSONA_REPRESENTANTE: '',
    COD_ROL: '',
    COD_USUARIO: '',
    CORREO: '',
    CORREO_PERSONAL: '',
    DIRECCION: '',
    ESTADO: '',
    FECHA_NACIMIENTO: '',
    GENERO: '',
    INTENTOS_FALLIDOS: '',
    NOMBRE: '',
    NOMBRE_USUARIO: '',
    TELEFONO: '',
    ULT_FECHA_INGRESO: ''
  }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user'));

    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-fw pi-plus"
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil'
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-times"
      }
    ]
  }

}
