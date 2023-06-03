
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
        nombre:["", [Validators.required]],
        apellido: ["", [Validators.required]],
        correo:["", [Validators.required, Validators.email]],
        usuario: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        provincia: ["", [Validators.required]],
        ciudad: ["", [Validators.required]],
      }
    )

  }

  get Nombre(){
    return this.formularioRegistro.get("nombre")
  }
  get Apellido(){
    return this.formularioRegistro.get("apellido")
  }

  get Correo(){
    return this.formularioRegistro.get("correo")
  }

  get Usuario(){
    return this.formularioRegistro.get("usuario")
  }


  get Password (){
    return this.formularioRegistro.get("password")
  }

  get Provincia (){
    return this.formularioRegistro.get("provincia")
  }

  get Ciudad(){
    return this.formularioRegistro.get("ciudad")
  }

  registrarUsuario(){
    if (this.formularioRegistro.valid){
      this.usuarioService.crearUsuario(this.formularioRegistro.value).subscribe(
        {next: (usuarioData:any) =>{
          console.log(usuarioData);
          this.router.navigateByUrl('/dashboard/perfil');
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
