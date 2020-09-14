import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  })

  logIn(auth) {
    const url = "http://localhost:3000/login";
    return this.http.post<any>(url, auth);
  }
}
