import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
editarUsuarioForm;
usuarioId:any;
datosUsuario:any;
cambiosGuardados:boolean= false;

constructor(private formBuilder:FormBuilder,
private activerouter: ActivatedRoute,
private usuarioService: UsuarioService){
this.editarUsuarioForm= this.formBuilder.group({
  email:["", [Validators.required, Validators.email]],
  username: ["", [Validators.required]],
  password: ["", [Validators.required, Validators.minLength(8)]],
})
}

ngOnInit(): void {
  //obtener el id del usuario
  this.usuarioId= this.activerouter.snapshot.paramMap.get('id');
  //obtener datos del usuario con ese id
  this.usuarioService.obtenerUsuario(this.usuarioId).subscribe((data: any)=>{
    this.datosUsuario= data;
  //completamos form con los datos obtenidos del usuario segun su ID
  this.editarUsuarioForm.setValue({
    "email": this.datosUsuario.email,
    "password": this.datosUsuario.password,
    "username": this.datosUsuario.username
  })
  
  
  })

  
}

  get Correo(){
    return this.editarUsuarioForm.get("email")
  }

  get Usuario(){
    return this.editarUsuarioForm.get("username")
  }


  get Password (){
    return this.editarUsuarioForm.get("password")
  }


  editarUsuario(){
    if (this.editarUsuarioForm.valid){
     let productoid = this.activerouter.snapshot.paramMap.get('id')
       this.usuarioService.actualizarUsuario(this.editarUsuarioForm.value,this.usuarioId).subscribe(
         {next: (usuarioData:any) =>{
           console.log(usuarioData);
           this.cambiosGuardados= true;
     
         },
         error: (errorData:any) => {
           console.error(errorData);
           
         }
 
       }); 
     }
     else{
       this.editarUsuarioForm.markAllAsTouched();
     }
   }
}
