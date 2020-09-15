import { Component, OnInit } from '@angular/core';
import { Edificio } from 'src/app/Models/infraestructura/edificio';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Aula } from 'src/app/Models/infraestructura/aula';
import { AulaService } from 'src/app/Services/Infra/Aula/aula.service';
import { EdificioService } from 'src/app/Services/Infra/Edificio/edificio.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  cols: any[];
  aulas: Aula[]
  edificios: Edificio[];
  //sedenew : Sede = new Sede();
  items: MenuItem[];
  displaySaveDialog: boolean = false;
  displayUpdateDialog: boolean = false;
  submitted: boolean;

  aula: Aula = {
    COD_AULA: null,
    COD_EDIFICIO: null,
    NOMBRE: null,
    CAPACIDAD: null,
    TIPO: null,
    PISO: null
  }

  selectedAula: Aula = {
    COD_AULA: null,
    COD_EDIFICIO: null,
    NOMBRE: null,
    CAPACIDAD: null,
    TIPO: null,
    PISO: null
  }

  constructor(private router: Router, private aulaService: AulaService, private edificioService: EdificioService, private messageService: MessageService, private confirmService: ConfirmationService) { }

  ngOnInit(): void {

    this.getAllAulas();
    this.getAllEdificios();

    this.cols = [
      { field: 'COD_AULA', header: 'Codigo Aula' },
      { field: 'COD_EDIFICIO', header: 'Código Edificio' },
      { field: 'NOMBRE', header: 'Nombre' },
      { field: 'CAPACIDAD', header: 'Capacidad' },
      { field: 'TIPO', header: 'Tipo de Aula' },
      { field: 'PISO', header: 'N° Piso' }
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
        command: () => this.showUpdateDialog(true)
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-times",
        command: () => this.delete()
      }
    ]
  }

  getAllAulas() {
    this.aulaService.getAll().subscribe(data => {
      this.aulas = data;
      console.log(this.aulas);
    }, error => {
      console.log(error);

    })
  }

  getAllEdificios(){
    this.edificioService.getAll().subscribe(data => {
      this.edificios = data;
      console.log(this.edificios);
    }, error => {
      console.log(error);
    })
  }

  guardarAula(){
    this.aulaService.save(this.aula).subscribe(data => {
      console.log(data);
      let aula = data as Aula;
      this.aulas.push(aula);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardo Aula correctamente' });
      this.displaySaveDialog = false;
      // this.router.navigate(["admin/sede"]);
      this.getAllAulas();
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Aula no pudo ser guardada ' });

    })
  }

  actualizarAula(){
    this.aulaService.update(this.aula).subscribe(data => {
      //this.sedenew = data;
      console.log(data);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se acualizo Aula correctamente' });
      this.getAllAulas();
      this.displayUpdateDialog = false;
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Aula no pudo ser actualizada ' });

    })
  }


  
  delete(): void {
    if (this.selectedAula == null || this.selectedAula.COD_AULA == null) {
      this.messageService.add({ severity: 'warn', summary: "Advertencia!", detail: "Por favor seleccione un registro" });
      return;
    }
    this.confirmService.confirm({
      message: "¿Está seguro que desea eliminar el registro?",
      accept: () => {
        this.edificioService.delete(this.selectedAula.COD_AULA).subscribe(
          (result: any) => {
            this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se eliminó el registro de aula correctamente." });
            this.getAllAulas();
            console.log(result);
          }
        )
      }
    })
  }
  showUpdateDialog(editar: boolean): void {
    if (editar) {
      if (this.selectedAula != null && this.selectedAula.COD_AULA != null) {
        this.aula = this.selectedAula;
      } else {
        this.messageService.add({ severity: 'warn', summary: "Advertencia!", detail: "Por favor seleccione un registro" });
        return;
      }
    }
    this.displayUpdateDialog = true;
  }
  showSaveDialog(): void {
    this.displaySaveDialog = true;
  }
  hideDialog() {
    this.displaySaveDialog = false;
    this.displayUpdateDialog = false;
    this.submitted = false;
  }

}
