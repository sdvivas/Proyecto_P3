import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudianteprofile',
  templateUrl: './estudianteprofile.component.html',
  styleUrls: ['./estudianteprofile.component.css']
})
export class EstudianteprofileComponent implements OnInit {

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
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
