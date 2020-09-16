import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  Url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  getMaterias(codDocente: String) : Observable<any>{
    return this.http.get(this.Url+"/est/nivel/"+codDocente);
  }
  getMateriasEstudiante(codDocente: String, cod_nivel) : Observable<any>{
    return this.http.get(this.Url+"/est/materias/"+codDocente+"/"+cod_nivel);
  }

  getNotasEstudiante(codDocente: String, cod_nivel, cod_asignatura) : Observable<any>{
    return this.http.get(this.Url+"/ver_notas/"+codDocente+"/"+cod_nivel+"/"+cod_asignatura);
  }
}
