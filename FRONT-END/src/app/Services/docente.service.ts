import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TareaAsignatura } from '../Models/docente/tarea_asignatura';

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
  getMateriasDocentes(codDocente: String, codAsignatura) : Observable<any>{
    return this.http.get(this.Url+"/docente/materias/"+codAsignatura+"/"+codDocente);
  }
  getNivelDocentes(codDocente: String) : Observable<any>{
    return this.http.get(this.Url+"/docente/nivel/"+codDocente);
  }

  nuevaTarea(nuevaTarea: TareaAsignatura): Observable<any>{
    
    return this.http.post(this.Url+"/docente/nueva_tarea", nuevaTarea);
  }
}
