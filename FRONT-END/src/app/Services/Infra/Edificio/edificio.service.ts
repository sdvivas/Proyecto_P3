import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from 'src/app/Models/infraestructura/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:3000/edificios";

  getAll() : Observable<any>{
    return this.http.get(this.Url);
    //return this.http.get(`${this.Url}`);
  }

  save(edificio: Edificio): Observable<any>{
    
    return this.http.post(this.Url, edificio);
  }
  update(edificio: Edificio) {
    return this.http.put(this.Url + "/" + edificio.COD_EDIFICIO, edificio);
  }

  delete(codEdif: String) : Observable<any>{
    return this.http.delete(this.Url+"/"+codEdif);
    
  }
}
