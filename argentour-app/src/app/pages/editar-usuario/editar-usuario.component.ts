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
  first_name: ["", [Validators.required]],
  last_name: ["", [Validators.required]],
  username: ["", [Validators.required]],
  dni: ["", [Validators.required]],
  tel:["", [Validators.required]]
  
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
    "first_name": this.datosUsuario.first_name,
    "last_name": this.datosUsuario.last_name,
    "username": this.datosUsuario.username,
    "dni": this.datosUsuario.dni,
    "tel": this.datosUsuario.tel
    
  })
  
  
  })

  
}

  get Nombre(){
    return this.editarUsuarioForm.get("first_name")
  }
  get Apellido(){
    return this.editarUsuarioForm.get("last_name")
  }

  get Usuario(){
    return this.editarUsuarioForm.get("username")
  }


  get Dni (){
    return this.editarUsuarioForm.get("dni")
  }
  get Telefono (){
    return this.editarUsuarioForm.get("tel")
  }


  editarUsuario(){
    if (this.editarUsuarioForm.valid){
      console.log(this.usuarioId);
      
     
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
