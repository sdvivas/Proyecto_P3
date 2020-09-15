import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/Models/docente/materia';
import { EstudianteService } from '../../Services/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private estudianteService: EstudianteService) { }

  materias: Materia[];

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
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMaterias();
  }

}
