import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {DocenteService} from "../../../Services/docente.service"
import { Materia } from 'src/app/Models/docente/materia';
import { Tarea } from 'src/app/Models/docente/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor(private docenteService: DocenteService) {}

  items: MenuItem[];
  cols: any[];
  materias: Materia[];
  materiasOptions = [];
  tarea : Tarea[];
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

  codigo: String;

  getMaterias(codDocente:String) {
    this.docenteService.getMaterias(codDocente).subscribe(
      data => {
        this.materias = data;
        // this.materias.forEach(function(value){
        //   this.materiasOptions.push({ label: "1", value: "1"});
        //   console.log(value.);
        // });
        
      },
      err => {
        console.log(err);
      }
    );
  }

  onchange($event) {
    this.codigo = $event.target.value;
    this.getTares(this.codigo);
    //console.log(this.codigo);
  }

  getTares(codigo_nivel){
    console.log("hoooooola");
    this.docenteService.getTareas("9",codigo_nivel).subscribe(data => {
      this.tarea = data;
      console.log(this.tarea);
    });
  };
  

  ngOnInit(): void {
    this.getMaterias("9");
    
    this.materiasOptions = [];
    
    this.user = JSON.parse(localStorage.getItem('user'));

    this.cols = [
      { field: 'COD_TAREA_ASIGNATURA', header: 'Codigo' },
      { field: 'NOMBRE', header: 'Asignatura' },
      { field: 'DETALLE_TAREA', header: 'Detalle' }
    ];
    
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
