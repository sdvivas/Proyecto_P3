import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from 'src/app/Models/infraestructura/aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:3000/aulas";

  getAll() : Observable<any>{
    return this.http.get(this.Url);
    
    //return this.http.get(`${this.Url}`);
  }
  save(aula: Aula): Observable<any>{
    
    return this.http.post(this.Url, aula);
  }
  update(aula: Aula) {
    return this.http.put(this.Url + "/" + aula.COD_AULA, aula);
  }

  delete(codsede: String) : Observable<any>{
    return this.http.delete(this.Url+"/"+codsede);
    
  }

}
