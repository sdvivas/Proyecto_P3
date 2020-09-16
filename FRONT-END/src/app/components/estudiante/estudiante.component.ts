import { Component, OnInit, ɵConsole } from '@angular/core';
import { Materia } from 'src/app/Models/docente/materia';
import { MateriaEstudiante } from 'src/app/Models/docente/materiaEstudiante';
import { EstudianteService } from '../../Services/estudiante.service';
import {Notas} from "../../Models/docente/nota.interface"

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private estudianteService: EstudianteService) { }

  materias: Materia[];
  notas : Notas[];
  materiasEstudiante: MateriaEstudiante[];
  cols: any[];

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

  getMaterias() {
    this.estudianteService.getMaterias(this.user.COD_PERSONA).subscribe(
      data => {
        console.log(data);
        this.materias = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  codigo: String;
  codigo_nivel : String;

  onchange($event) {
    this.codigo = $event.target.value;
    this.getMateriasEstudiante(this.codigo);
    console.log(this.codigo_nivel);
  }
  cargarTabla($event){
    this.codigo = $event.target.value;
    this.getNotas(this.codigo_nivel, this.codigo);
  }

  getNotas(cod_nivel, cod_asignatura){
    console.log("TABLA");
    console.log(cod_nivel);
    console.log(cod_asignatura);
    console.log(this.user.COD_PERSONA);

    this.estudianteService.getNotasEstudiante(this.user.COD_PERSONA,cod_nivel,cod_asignatura).subscribe(
      data =>{
        this.notas = data;
        console.log(this.notas);
      },
      err =>{
        console.log(err);
      }
    )
  }

  getMateriasEstudiante(codigo){
    this.estudianteService.getMateriasEstudiante(this.user.COD_PERSONA,codigo).subscribe(
      data => {
        console.log(data);
        this.materiasEstudiante = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMaterias();
    this.cols = [
      { field: 'NOTA1', header: 'NOTA 1' },
      { field: 'NOTA2', header: 'NOTA 2' },
      { field: 'NOTA3', header: 'NOTA 3' }
    ];
  }

}
