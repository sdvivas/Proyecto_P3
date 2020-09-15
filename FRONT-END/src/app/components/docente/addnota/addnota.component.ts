import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotaService } from "../../../Services/nota/nota.service";

@Component({
  selector: 'app-addnota',
  templateUrl: './addnota.component.html',
  styleUrls: ['./addnota.component.css']
})
export class AddnotaComponent implements OnInit {

  constructor(private router: Router, private notaService: NotaService) { }

  ngOnInit(): void {
  }

  listNivel(cod_docente){
    this.notaService.listarNivel(cod_docente).subscribe(data => {
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

  }

  listParalelo(){

  }

  listEstudiantes(){

  }

}
