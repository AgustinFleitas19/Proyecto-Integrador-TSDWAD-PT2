import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';


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
    private authService: AuthService,
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

  LogIn(event: Event){

    event.preventDefault();

    if (this.formularioLogin.valid){
      console.log("Formulario valido")
      this.authService.login(this.formularioLogin.value).subscribe(
        {next: (loginData:any) =>{
          console.log('DATA' + JSON.stringify(loginData));
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
  
  
  LogOut(){
    this.authService.logout()
    console.log("Cerraste sesión");
    
  }


}
