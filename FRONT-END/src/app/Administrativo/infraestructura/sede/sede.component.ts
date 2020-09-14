import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/Models/infraestructura/sede';
import { SedeService } from 'src/app/Services/Infra/Sede/sede.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  sede: Sede[];
  constructor(private sedeService: SedeService) { }

  ngOnInit(): void {
    this.sedeService.getAll().subscribe(data => {
      this.sede = data;
      console.log(this.sede);
      console.log(data);
      

    }, error => {
      console.log(error);

    })
  }

}
