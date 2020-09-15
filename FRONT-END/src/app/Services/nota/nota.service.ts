import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NivelDocentes  } from "../../Models/docente/nivelDocente";
import { Materia } from "../../Models/docente/materia.interface";
import { Paralelo } from "../../Models/docente/paralelo.interface";
import { Notas } from "../../Models/docente/nota.interface";


@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private Materias:  Materia[];
  private Paralelo: Paralelo[];
  private Notas: Notas[];
  private Nivel: NivelDocentes[];

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  })

  listarAsignatura(){
    const url = "http://localhost:3000/docente/asignatura";
    return this.http.get<any>(url);
  }

  listarParalelo() {
    const url = "http://localhost:3000/docente/paralelo";
    return this.http.get<any>(url);
  }
  listarNivel(cod_docente) {
    const url = "http://localhost:3000/docente/nivel/" + cod_docente;
    return this.http.get<any>(url);
  }
  listarEstudiante() {
    const url = "http://localhost:3000/docente/estudiantes";
    return this.http.get<any>(url);
  }
}
