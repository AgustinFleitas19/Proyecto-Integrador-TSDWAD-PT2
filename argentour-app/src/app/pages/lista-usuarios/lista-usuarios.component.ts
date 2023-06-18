import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  listaUsuarios:any;
  usuarioDeleted: boolean= false;

  constructor(private usuarioServicio: UsuarioService,
    private router:Router){
    this.usuarioServicio.obtenerUsuarios().subscribe(
      {next: (usuariosData) =>{
        this.listaUsuarios = usuariosData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    }
    )

  }
 borrarUsuario(id:number){
  this.usuarioServicio.eliminarUsuario(id).subscribe({
      
    next: (usuarioBorrado)=>{
      console.log(usuarioBorrado);
      this.usuarioDeleted= true
      
    },
    error: (errorData) => {
      console.error(errorData);
      }
  }) 
 }

 editarUsuario(id:number){
  this.router.navigate(['dashboard/editar-usuario', id])
}

}
