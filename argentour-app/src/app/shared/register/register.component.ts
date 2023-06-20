
import { Component,OnInit,ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  formularioRegistro:any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    
    private usuarioService: UsuarioService,
    ){

    this.formularioRegistro= this.formBuilder.group(
      {
        first_name:["", [Validators.required]],
        last_name: ["", [Validators.required]],
        email:["", [Validators.required, Validators.email]],
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
      
      }
    )

  }

  get Nombre(){
    return this.formularioRegistro.get("first_name")
  }
  get Apellido(){
    return this.formularioRegistro.get("last_name")
  }

  get Correo(){
    return this.formularioRegistro.get("email")
  }

  get Usuario(){
    return this.formularioRegistro.get("username")
  }


  get Password (){
    return this.formularioRegistro.get("password")
  }

  /*get Provincia (){
    return this.formularioRegistro.get("provincia")
  }

  get Ciudad(){
    return this.formularioRegistro.get("ciudad")
  }*/

  registrarUsuario(){
    if (this.formularioRegistro.valid){
      console.log(this.formularioRegistro.value);
      
  
      this.usuarioService.crearUsuario(this.formularioRegistro.value).subscribe(
        {next: (usuarioData:any) =>{
          console.log(usuarioData);
          this.router.navigateByUrl('/login');
        },
        error: (errorData:any) => {
          console.error(errorData);
          
        }
        });
       
    }
    else{
      this.formularioRegistro.markAllAsTouched();
    }
  }
}
