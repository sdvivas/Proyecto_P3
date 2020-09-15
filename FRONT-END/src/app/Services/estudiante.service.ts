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
}
