import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/Models/infraestructura/sede';
import { SedeService } from 'src/app/Services/Infra/Sede/sede.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  cols: any[];
  sede: Sede[];
  //sedenew : Sede = new Sede();
  items: MenuItem[];
  displaySaveDialog: boolean = false;
  displayUpdateDialog: boolean = false;
  submitted: boolean;

  sedenew: Sede = {
    COD_SEDE: null,
    NOMBRE: null,
    DIRECCION: null,
    TELEFONO: null,
    CODIGO_POSTAL: null
  }

  selectedSede: Sede = {
    COD_SEDE: null,
    NOMBRE: null,
    DIRECCION: null,
    TELEFONO: null,
    CODIGO_POSTAL: null
  };

  constructor(private router: Router, private sedeService: SedeService, private messageService: MessageService, private confirmService: ConfirmationService) { }

  showSaveDialog(): void {
    this.displaySaveDialog = true;

  }
  showUpdateDialog(editar: boolean) {
    if (editar) {
      if (this.selectedSede != null && this.selectedSede.COD_SEDE != null) {
        this.sedenew = this.selectedSede;
      } else {
        this.messageService.add({ severity: 'warn', summary: "Advertencia!", detail: "Por favor seleccione un registro" });
        return;
      }
    }
    this.displayUpdateDialog = true;
  }

  hideDialog() {
    this.displaySaveDialog = false;
    this.displayUpdateDialog = false;
    this.submitted = false;
  }

  getAllSedes() {
    this.sedeService.getAll().subscribe(data => {
      this.sede = data;
      console.log(this.sede);

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
  guardarSede() {

    this.sedeService.save(this.sedenew).subscribe(data => {
      console.log(data);
      let sedee = data as Sede;
      this.sede.push(sedee);
      //this.validarSede(sedee);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardo Sede correctamente' });
      this.displaySaveDialog = false;
      // this.router.navigate(["admin/sede"]);
      this.getAllSedes();
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'sede no pudo ser guardada ' });

    })
  }

  actualizarSede() {
    this.sedeService.update(this.sedenew).subscribe(data => {
      //this.sedenew = data;
      console.log(data);
      this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se acualizo Sede correctamente' });
      this.getAllSedes();
      this.displayUpdateDialog = false;
    }, error => {
      console.log(error);
      console.log("esta en error");
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'sede no pudo ser actualizada ' });

    })
  }

  delete() {

    if (this.selectedSede == null || this.selectedSede.COD_SEDE == null) {
      this.messageService.add({ severity: 'warn', summary: "Advertencia!", detail: "Por favor seleccione un registro" });
      return;
    }
    this.confirmService.confirm({
      message: "¿Está seguro que desea eliminar el registro?",
      accept: () => {
        this.sedeService.delete(this.selectedSede.COD_SEDE).subscribe(
          (result: any) => {
            this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se eliminó la sede correctamente." });
            this.getAllSedes();
            console.log(result);
            
            //this.deleteObject(result.id);
          }
        )
      }
    })

  }
  
  ngOnInit(): void {

    this.getAllSedes();


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
        command: () => this.showUpdateDialog(true)
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-times",
        command: () => this.delete()
      }
    ]

  }


}
