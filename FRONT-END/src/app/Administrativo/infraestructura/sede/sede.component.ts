import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/Models/infraestructura/sede';
import { SedeService } from 'src/app/Services/Infra/Sede/sede.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  cols: any[];
  sede: Sede[];
  items: MenuItem[];
  displaySaveDialog : boolean =false;
  submitted: boolean;

  constructor(private sedeService: SedeService) { }

  showSaveDialog(): void {
    this.displaySaveDialog=true;
  }
  hideDialog() {
    this.displaySaveDialog = false;
    this.submitted = false;
}
  guardarSede(){
    console.log("guardado");
    
  }

  ngOnInit(): void {
    this.sedeService.getAll().subscribe(data => {
      this.sede = data;
      console.log(this.sede);


    }, error => {
      console.log(error);

    })

    this.cols = [
      { field: 'COD_SEDE', header: 'Codigo' },
      { field: 'NOMBRE', header: 'Nombre' },
      { field: 'DIRECCION', header: 'Dirección' },
      { field: 'TELEFONO', header: 'Telefono' },
      { field: 'CODIGO_POSTAL', header: 'Codigo Postal' }
    ];

    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-fw pi-plus",
        command: () => this.showSaveDialog()
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',

      }
    ]

  }


}
