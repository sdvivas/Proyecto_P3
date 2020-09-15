import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sede } from 'src/app/Models/infraestructura/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:3000/sedes";

  getAll() : Observable<any>{
    return this.http.get(this.Url);
    
    //return this.http.get(`${this.Url}`);
  }

  save(sede: Sede): Observable<any>{
    
    return this.http.post(this.Url, sede);
  }
  update(sede: Sede) {
    return this.http.put(this.Url + "/" + sede.COD_SEDE, sede);
  }

  delete(codsede: String) : Observable<any>{
    return this.http.delete(this.Url+"/"+codsede);
    
  }

}
