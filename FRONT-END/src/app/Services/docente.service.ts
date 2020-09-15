import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../Models/docente/materia';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:3000";

  getMaterias(codDocente: String) : Observable<any>{
    return this.http.get(this.Url+"/docente/"+codDocente+"/materias");
  }
  getTareas(codDocente: String, codAsignatura) : Observable<any>{
    return this.http.get(this.Url+"/docente/"+codDocente+"/"+codAsignatura+"/tareas");
  }
}
