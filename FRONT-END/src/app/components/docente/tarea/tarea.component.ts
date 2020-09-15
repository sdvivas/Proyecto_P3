import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DocenteService } from "../../../Services/docente.service"
import { Materia } from 'src/app/Models/docente/materia';
import { Tarea } from 'src/app/Models/docente/tarea';
import { TareaAsignatura } from 'src/app/Models/docente/tarea_asignatura';
import { NivelDocentes } from 'src/app/Models/docente/nivelDocente';
import { MateriaDocente } from 'src/app/Models/docente/materiaDocente';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmService: ConfirmationService, private docenteService: DocenteService) { }

  items: MenuItem[];
  cols: any[];
  materias: Materia[];

  nivelDocente: NivelDocentes[];

  materiasDocente: MateriaDocente[];

  materiasOptions = [];

  tarea: Tarea[];

  displaySaveDialog: boolean = false;


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

  nuevaTarea: TareaAsignatura = {
    COD_TAREA_ASIGNATURA: null,
    COD_NIVEL_EDUCATIVO: null,
    COD_ASIGNATURA: null,
    COD_PERIODO_LECTIVO: 'P12020',
    COD_PARALELO: 'PAR02',
    COD_DOCENTE: null,
    COD_QUIMESTRE: '1',
    DETALLE_TAREA: null
  }

  codigo: String;

  hideDialog() {
    this.displaySaveDialog = false;
  }

  insertarNuevaTarea() {
    console.log("Ingreso");

    console.log(this.nuevaTarea);
    this.nuevaTarea.COD_DOCENTE = this.user.COD_PERSONA;

    this.docenteService.nuevaTarea(this.nuevaTarea).subscribe(data => {
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardo la nueva tarea correctamente' });
      this.displaySaveDialog = false;
    }, error => {
      this.displaySaveDialog = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tarea no pudo ser guardada ' });
    });
    this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardo la nueva tarea correctamente' });
    this.displaySaveDialog = false;
    this.docenteService.getTareas(this.user.COD_PERSONA, this.nuevaTarea.COD_NIVEL_EDUCATIVO).subscribe(data => {
      this.tarea = data;
      console.log(this.tarea);
    });
  }

  getMaterias(codDocente: String) {
    this.docenteService.getMaterias(codDocente).subscribe(
      data => {
        this.materias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getNivelDocente(codDocente: String) {
    this.docenteService.getNivelDocentes(codDocente).subscribe(
      data => {
        console.log(data);
        this.nivelDocente = data;
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

  getTares(codigo_nivel) {
    this.docenteService.getTareas(this.user.COD_PERSONA, codigo_nivel).subscribe(data => {
      this.tarea = data;
      console.log(this.tarea);
    });
  };

  showSaveDialog(): void {
    this.displaySaveDialog = true;
    this.getNivelDocente(this.user.COD_PERSONA,);
  }

  onLoad($event) {
    this.codigo = $event.target.value;
    this.getMateriasDocente(this.codigo);
  }

  getMateriasDocente(codigo_nivel) {
    console.log(codigo_nivel);
    this.docenteService.getMateriasDocentes(this.user.COD_PERSONA, codigo_nivel).subscribe(data => {
      this.materiasDocente = data;
      console.log(this.materiasDocente);
    });
  }


  ngOnInit(): void {
    this.getMaterias('3');

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
        icon: "pi pi-fw pi-plus",
        command: () => this.showSaveDialog()
      }
    ]
  }

}
