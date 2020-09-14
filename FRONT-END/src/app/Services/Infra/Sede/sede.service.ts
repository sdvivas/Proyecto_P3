import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
