import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  })

  listarAsignatura(cod_docente, cod_paralelo) {
    const url = "http://localhost:3000/docente/asignatura/" + cod_docente + "/" + cod_paralelo;
    return this.http.get<any>(url);
  }
  listarParalelo(cod_docente) {
    const url = "http://localhost:3000/docente/paralelo/" + cod_docente;
    return this.http.get<any>(url);
  }
  listarNivel(cod_docente) {
    const url = "http://localhost:3000/docente/nivel/" + cod_docente;
    return this.http.get<any>(url);
  }
  listarEstudiante(cod_docente, cod_asignatura, cod_paralelo, cod_nivel_educativo) {
    const url = "http://localhost:3000/docente/estudiantes/" + cod_docente + "/" + cod_asignatura + "/" + cod_paralelo + "/" + cod_nivel_educativo;
    return this.http.get<any>(url);
  }
}
