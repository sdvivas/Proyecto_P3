import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { NotaService } from "../../../Services/nota/nota.service";
import { NivelDocentes  } from "../../../Models/docente/nivelDocente";
import { Materia } from "../../../Models/docente/materia.interface";
import { Paralelo } from "../../../Models/docente/paralelo.interface";
import { Notas } from "../../../Models/docente/nota.interface";

@Component({
  selector: 'app-addnota',
  templateUrl: './addnota.component.html',
  styleUrls: ['./addnota.component.css']
})
export class AddnotaComponent implements OnInit {
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
  public selectedNivel: NivelDocentes = { COD_NIVEL_EDUCATIVO: '', COD_ASIGNATURA: '', COD_PERIODO_LECTIVO: '', 
  COD_PARALELO: '', COD_DOCENTE: '', COD_QUIMESTRE: '', COD_AULA: '', NOMBRE: '',
  NIVEL: ''};
  public selectedParalelo: Paralelo = {COD_PARALELO: '', NOMBRE: ''};
  public selectedAsignatura: Materia = {COD_ASIGNATURA: '', NOMBRE: ''};

  public Materia: Materia[];
  public Nivel: NivelDocentes[];
  public Paralelo: Paralelo[];
  public cod_paralelo;
  public cod_nivel;
  items: MenuItem[];
  displayUpdateDialog: boolean = false;
  submitted: boolean;
  verNotas : Notas[];

  selected: Notas = {
    

    COD_PERSONA: null,
    COD_PERSONA_REPRESENTANTE:  null,
    CEDULA:  null,
    APELLIDO:  null,
    NOMBRE:  null,
    DIRECCION:  null,
    TELEFONO:  null,
    FECHA_NACIMIENTO: null,
    GENERO:  null,
    CORREO:  null,
    CORREO_PERSONAL:  null,
    COD_PERIODO_LECTIVO:  null,
    COD_ALUMNO:  null,
    COD_NIVEL_EDUCATIVO:  null,
    COD_ASIGNATURA:  null,
    COD_PARALELO:  null,
    COD_DOCENTE:  null,
    COD_QUIMESTRE:  null,
    NOTA1:  null,
    NOTA2:  null,
    NOTA3:  null,
    NOTA4:  null,
    NOTA5:  null,
    NOTA6:  null,
    NOTA7:  null,
    NOTA8:  null,
    NOTA9:  null,
    NOTA10:  null,
    NOTA11:  null,
    NOTA12:  null,
    NOTA13:  null,
    NOTA14:  null,
    NOTA15:  null

  }
  cols: any[];

  constructor(private router: Router, private notaService: NotaService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.listNivel();
    this.listParalelo();
    this.cols = [
      { field: 'APELLIDO', header: 'APELLIDO' },
      { field: 'NOMBRE', header: 'NOMBRE' },
      { field: 'NOTA1', header: 'NOTA 1' },
      { field: 'NOTA2', header: 'NOTA 2' },
      { field: 'NOTA3', header: 'NOTA 3' }
    ];

    this.items = [
      
      {
        label: 'Guardar',
        icon: 'pi pi-fw pi-pencil'
        
      }
    ]
  }
  showUpdateDialog(editar: boolean): void {
    if (editar) {
      if (this.selected != null && this.selected.COD_ALUMNO != null) {
        this.selected = this.selected;
      } 
    }
    this.displayUpdateDialog = true;
  }

  listNivel(){
    this.notaService.listarNivel(this.user.COD_PERSONA).subscribe(data => {
      this.Nivel = data;
      console.log(this.Nivel);
    }, error => {
      console.log(error);

    })
  }

  listParalelo(){
    this.notaService.listarParalelo(this.user.COD_PERSONA).subscribe(data => {
      this.Paralelo = data;
      console.log(this.Paralelo);
    }, error => {
      console.log(error);

    })
  }

 listEstudiante(cod_asignatura){
    this.notaService.listarEstudiante(this.user.COD_PERSONA,cod_asignatura,this.cod_paralelo,this.cod_nivel).subscribe(data => {
      console.log(data);
      this.verNotas = data;
      console.log(this.verNotas);
    }, error => {
      console.log(error);

    })
  }

  onSelect(cod_asignatura){
    this.cod_paralelo = cod_asignatura;
    this.notaService.listarAsignatura(this.user.COD_PERSONA,cod_asignatura).subscribe(data => {
      this.Materia = data;
      console.log(this.cod_paralelo);
    }, error => {
      console.log(error);

    })
  }
  onNivel(cod_nivel){
    this.cod_nivel = cod_nivel;
    console.log(this.cod_nivel);
  }

}
