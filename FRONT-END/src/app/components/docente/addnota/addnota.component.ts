import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotaService } from "../../../Services/nota/nota.service";

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

  constructor(private router: Router, private notaService: NotaService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.listNivel();
  }

  listNivel(){
    this.notaService.listarNivel(this.user.COD_PERSONA).subscribe(data => {
      //this.sede = data;
      console.log(data);
      // let sedes: Sede[] = [];
      //   for (let i = 0; i < data.length; i++) {
      //     let sede = data[i] as Sede;
      //     sedes.push(sede);
      //   }
      //   this.sede = sedes;
    }, error => {
      console.log(error);

    })
  }

  listMaterias(){
    this.notaService.listarAsignatura().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);

    })
  }

  listParalelo(){
    this.notaService.listarParalelo().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);

    })
  }

  listEstudiantes(){
    this.notaService.listarEstudiante().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);

    })
  }

}
