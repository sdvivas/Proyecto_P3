import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Edificio } from 'src/app/Models/infraestructura/edificio';
import { EdificioService } from 'src/app/Services/Infra/Edificio/edificio.service';
import { Sede } from 'src/app/Models/infraestructura/sede';
import { SedeService } from 'src/app/Services/Infra/Sede/sede.service';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.css']
})
export class EdificioComponent implements OnInit {

  cols: any[];
  edificios: Edificio[];
  sedes: Sede[];
  //selectedCodSede: Edificio;
  items: MenuItem[];
  displaySaveDialog: boolean = false;
  displayUpdateDialog: boolean = false;
  submitted: boolean;

  edificio: Edificio = {
    COD_EDIFICIO: null,
    COD_SEDE: null,
    NOMBRE: null,
    CANTIDAD_PISOS: null

  }

  selectedEdificio: Edificio = {
    COD_EDIFICIO: null,
    COD_SEDE: null,
    NOMBRE: null,
    CANTIDAD_PISOS: null
  };

  constructor(private router: Router, private sedeService: SedeService, private edificioService: EdificioService, private messageService: MessageService, private confirmService: ConfirmationService) { }


  ngOnInit(): void {

    this.getAllEdificios();
    this.getAllSedes();


    this.cols = [
      { field: 'COD_EDIFICIO', header: 'Codigo Edificio' },
      { field: 'COD_SEDE', header: 'Código Sede' },
      { field: 'NOMBRE', header: 'Nombre' },
      { field: 'CANTIDAD_PISOS', header: 'Cant. Pisos' }
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
  getAllSedes() {
    this.sedeService.getAll().subscribe(data => {
      this.sedes = data;
      console.log(this.sedes);
    }, error => {
      console.log(error);

    })
  }

  getAllEdificios() {
    this.edificioService.getAll().subscribe(data => {
      this.edificios = data;
      console.log(this.edificios);
    }, error => {
      console.log(error);
    })

  }

  showUpdateDialog(editar: boolean){
    if (editar) {
      if (this.selectedEdificio != null && this.selectedEdificio.COD_EDIFICIO != null) {
        this.edificio = this.selectedEdificio;
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

  guardarEdificio() {
    this.edificioService.save(this.edificio).subscribe(data => {
      console.log(data);
      let edi = data as Edificio;
      this.edificios.push(edi);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardo Edificio correctamente' });
      this.displaySaveDialog = false;
      // this.router.navigate(["admin/sede"]);
      this.getAllSedes();
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edificio no pudo ser guardada ' });

    })
  }

  actualizarEdificio(){
    this.edificioService.update(this.edificio).subscribe(data => {
      //this.sedenew = data;
      console.log(data);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se acualizo Edificio correctamente' });
      this.getAllEdificios();
      this.displayUpdateDialog = false;
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edificio no pudo ser actualizada ' });

    })
  }

  delete(): void {
    if (this.selectedEdificio == null || this.selectedEdificio.COD_EDIFICIO == null) {
      this.messageService.add({ severity: 'warn', summary: "Advertencia!", detail: "Por favor seleccione un registro" });
      return;
    }
    this.confirmService.confirm({
      message: "¿Está seguro que desea eliminar el registro?",
      accept: () => {
        this.edificioService.delete(this.selectedEdificio.COD_EDIFICIO).subscribe(
          (result: any) => {
            this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se eliminó el registro de edificio correctamente." });
            this.getAllEdificios();
            console.log(result);
            
            //this.deleteObject(result.id);
          }
        )
      }
    })
  }

}
