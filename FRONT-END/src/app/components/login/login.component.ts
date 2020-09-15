import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../Services/auth/login.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth = {
    username : '',
    password : ''
  }

  constructor(private loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.logIn(this.auth)
    .subscribe(
      res => {
        if(res == null){
          console.log("Datos erroneos");
        }else{
          console.log(res.APELLIDO);
          if(res.COD_ROL == "EST"){
            localStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['estudiante']);//profile
          }else{
            if(res.COD_ROL == "DOC"){
              localStorage.setItem('user', JSON.stringify(res));
              this.router.navigate(['docente']);//profile
            }else{
              localStorage.setItem('user', JSON.stringify(res));
              this.router.navigate(['admin']);//profile
            }
          }
        }
      },
      err => console.log(err)
    )
  }

}
