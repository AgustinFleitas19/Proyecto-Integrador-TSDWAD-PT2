import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin:any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private loginService: LoginService,
    ){

    this.formularioLogin= this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]], 
        password: ["", [Validators.required]],
      }
    )

  }

  get Correo (){
    return this.formularioLogin.get("email");
  }

  get Password (){
    return this.formularioLogin.get("password");
  }

  LogIn(){

    if (this.formularioLogin.valid){
      this.loginService.Login(this.formularioLogin.value).subscribe(
        {next: (loginData:any) =>{
          console.log(loginData);
          this.router.navigateByUrl('/dashboard/perfil');
        },
        error: (errorData:any) => {
          console.error(errorData);
          
        }
        }
      );

    }
    else{
      this.formularioLogin.markAllAsTouched();
    }
  }
    
}
